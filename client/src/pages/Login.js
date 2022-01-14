import "../styles/Login.css";
import React from 'react';
import Axios from 'axios';
import { useHistory } from "react-router-dom";

function Login() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    let history = useHistory();
    // const [loginStatus, setLoginStatus] = useState(false);//stin thesi tou kapoio function

    // const onChangeHandler = () => {console.log("hey")} 
    // = useCallback((event) => {
    //     //const [open, setOpen]= useState(false);
    //     setOpen(true);
    //     this.setState({
    //         loginStatus: "LOGGED_IN",
    //         setLoginStatus: event.data.user
    //     });
    // }, []);

    Axios.defaults.withCredentials = true;

    const login = (e) => {
        //console.log("hello");
        e.preventDefault();
        Axios.post('http://localhost:3001/login', {
            username: username,
            password: password
        }).then((response) => {
            console.log(response);
            if (!response.data.auth) {
                // setLoginStatus(false);
            } else {
                console.log(response.data);
                sessionStorage.setItem("token", response.data.token);
                // setLoginStatus(true);
                history.push('/');
            }
        });
    };
    // useEffect(() => {
    //     if(typeof sessionStorage.getItem("token")== "string"){
    //         history.push('/');
    //     }
    //     // Axios.get("http://localhost:3001/login").then((response) => {
    //     //     if (response.data.loggedIn === true) {
    //     //         setLoginStatus(response.data.user[0].username);
    //     //     }
    //     // });
    // }, [history]);

    // const userAuthenticated = () => {
    //     Axios.get("http://localhost:3001/isUserAuth", {
    //         headers: {
    //             "x-access-token": localStorage.getItem("token"),
    //         },
    //     }).then((response) => {
    //         console.log(response);
    //     });
    // };

    return (
        <div className="contact">
            <div className="rightSide">
                <h1>Συνδεθείτε</h1>
                <form id="contact-form" method="POST">
                    <label htmlFor="username">Όνομα χρήστη</label>
                    <input  name="username"
                            id="username"
                            placeholder="Όνομα χρήστη..."
                            type="text"
                            onChange={(event) => {
                                setUsername(event.target.value);
                            }}
                    />
                    <label htmlFor="password">Κωδικός</label>
                    <input  name="password"
                            id="password"
                            placeholder="Κωδικός..."
                            type="text"
                            onChange={(event) => {
                                setPassword(event.target.value);
                            }}
                    />
                    <button type="submit" onClick={login}>Σύνδεση</button>
                </form>
                {/* {loginStatus && <button onClick={userAuthenticated}>check if Auth</button>} */}
            </div>
        </div>
    )
}

export default Login
