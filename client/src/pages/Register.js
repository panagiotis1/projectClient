import React, {useState} from 'react';
import "../styles/Register.css";
import Axios from 'axios';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    userame: yup.string().required(),
    //lastName: yup.string().required(),
    email: yup.string().email().required(),
    //age: yup.number().positive().integer().required(),
    password: yup.string().min(4).max(15).required(),
    //confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
  });

function Register() {
    const [usernameReg, setUsernameReg] = useState("");
    const [emailReg, setEmailReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
      });
    
      const submitForm = (data) => {
        console.log(data);
      };

    Axios.defaults.withCredentials = true;

    const register1 = (e) => {
        //console.log("Heeeyyyyy")
        console.log(errors);
        e.preventDefault();
        
        console.log(usernameReg,emailReg,passwordReg);
        // Axios.post('http://localhost:3001/register', {
        //     username: usernameReg,
        //     email: emailReg, 
        //     password: passwordReg
        // }).then((response) => {
        //     console.log(response);
        // });
        // // Axios.get('http://localhost:3001/').then((response) => {
        // //     console.log(response);
        // // })
    };
console.log({...register('email', { required: true })});
console.log(errors);
const onSubmit = (data) => console.log(data);
    return (
        <div className="contact">
            <div className="rightSide">
                <h1>Εγγραφείτε τώρα</h1>
                <form id="contact-form" method="POST" onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="username">Όνομα χρήστη</label>
                    <input  name="username"
                            id="username"
                            placeholder="Όνομα χρήστη..."
                            type="text"
                            onChange={(event) => {
                                setUsernameReg(event.target.value);
                            }}
                    />
                    <label htmlFor="email">Email</label>
                    <input  id="email"
                            placeholder="Email..."
                            type="text"
                            onChange={(event) => {
                                console.log("Heeeyyyyy2")
                                setEmailReg(event.target.value);
                            }}
                            {...register('email', { required: true })} 
                    />
                    {errors && errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
                     {/* <label htmlFor="email2">Επιβαιβέωση Email</label>
                    <input  name="email2" 
                            id="email2"
                            placeholder="Επιβαιβέωση Email..."
                            type="text"
                            // ref={register({
                            //     required: true,
                            //     pattern: "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                            // })}
                            onChange={(event) => {
                                setEmailReg(event.target.value);
                            }}
                    /> */}
                    <label htmlFor="password">Κωδικός</label>
                    <input  name="password"
                            id="password"
                            placeholder="Κωδικός..."
                            type="text"
                            onChange={(event) => {
                                setPasswordReg(event.target.value);
                            }}
                    />
                    {/* <label htmlFor="password2">Επιβαιβέωση Κωδικού</label>
                    <input  name="password2"
                            id="password2"
                            placeholder="Επιβαιβέωση Κωδικού..."
                            type="text"
                            onChange={(event) => {
                                setPasswordReg(event.target.value);
                            }}
                    /> */}
                    

                    <button type="submit" onClick={register1}>Εγγραφή</button>
                </form>
            </div>
        </div>
    )
}

export default Register
