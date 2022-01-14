const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const jwt = require('jsonwebtoken');


const app = express();

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(cookieParser());
//app.use(bodyParser.urlencoded({ extends: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(
    session({
        key: "userId",
        secret: "subscribe",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60*60*24*1000,
        },
    })
);

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "my_site_database"
});


app.get("/", (req, res)=>{
    res.send("HEYYYYYYY");
    // const username = "testing";
    // const email = "testing@mail.gr";
    // const password = "12345";
    // db.query(
    //     "INSERT INTO my_site_database.users (username, email, password) VALUES (?,?,?)",
    //     [username, email, password],
    //     (err, result) => {
    //         if (err) throw err;
    //         console.log(result);
    //     }
    // );
});



app.post('/register', (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    //console.log("username", username);
    //console.log("email", email);
    //console.log("password", password);

    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            console.log(err);
        }
        db.query(
            "INSERT INTO my_site_database.users (username, email, password) VALUES (?,?,?)",
            [username, email, hash],
            (err, result) => {
                if (err){
                    console.log(err);
                }else{
                    console.log(result);
                }
            }
        );
    });
    
    // db.query("SELECT * FROM users",
    //     (err, result) => {
    //         if (err) throw err;
    //         console.log(result);    
    //     }
    // );
    res.send("HEYYYYYYY2....Register");
});

const verifyJWT = (req, res, next) => {
    const token = req.headers["x-access-token"]
    if (!token) {
        res.send("Token doesn't exists.......")
    } else {
        jwt.verify(token, "oneSecret", (err, decoded) => {
            console.log(decoded);
            if (err) {
                res.json({ auth: false, message: "Authedication failed...."});
            } else {
                req.userId = decoded.id;
                req.username = decoded.username;
                next();
            }
        });
    }
};

app.get("/isUserAuth", verifyJWT, (req, res) => {
    console.log(req.userId);
    res.send(`---${req.username} is Authenticated---`)
})

app.get('/login', (req, res) => {
    if (req.session.user) {
        res.send({loggedIn: true, user: req.session.user});
    } else {
        res.send({ loggedIn: false });
    }
});

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    // console.log("username", username);
    // console.log("password", password);
    db.query(
        "SELECT * FROM users WHERE username = ?;",
        username,
        (err, result) => {
            if (err){
                res.send({err: err});
            }

            if (result.length > 0){
                bcrypt.compare(password, result[0].password, (error, response) => {
                    if (response) {
                        const payload = {id:result[0].id, username:result[0].username};
                        const token = jwt.sign(payload, "oneSecret", {
                            expiresIn: 300
                        })
                        req.session.user = result;

                        res.json({auth: true, token: token, result: result});
                    } else {
                        res.json({
                            auth: false,
                            message: "Λάθος συνδυασμός μεταξύ Ονόματος χρήστη και Κωδικού."
                        });
                    }
                });
            }else{
                res.json({
                    auth: false,
                    message: "Δεν υπάρχει ο χρήστης."
                });
            }
        }
    );
});

app.listen(3001, () => {
    console.log("server runs...");
});