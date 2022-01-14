import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import "../styles/Register2.css";
import Axios from 'axios';

function Register2() {
    const [usernameReg, setUsernameReg] = useState("");
    const [emailReg, setEmailReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    //const onSubmit = (data) => console.log(data);


    Axios.defaults.withCredentials = true;

    const register1 = () => {
        //console.log("Heeeyyyyy")
        console.log(errors);
        //e.preventDefault();
        
        console.log(usernameReg,emailReg,passwordReg);
        Axios.post('http://localhost:3001/register', {
            username: usernameReg,
            email: emailReg, 
            password: passwordReg
        }).then((response) => {
            console.log(response);
        });
        // Axios.get('http://localhost:3001/').then((response) => {
        //     console.log(response);
        // })
    };


    return (
        <div className="contact">
            <div className="rightSide">
                <h1>Εγγραφείτε τώρα</h1>
                <form onSubmit={handleSubmit(register1)}>
                    <label htmlFor="username">Όνομα χρήστη</label>
                    <input  name="username"
                            id="username"
                            placeholder="Όνομα χρήστη..."
                            type="text"
                            {...register('username',{   required:   true,
                                                        onChange:(event) => {
                                                            setUsernameReg(event.target.value);
                                                        }
                                                    }
                                        )
                            }
                    />

                    <label  htmlFor="email">Email</label>
                    <input  id="email"
                            placeholder="Email..."
                            type="text"
                            {...register('email',   {   required:   true,
                                                        pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                                        onChange:(event) => {
                                                            setEmailReg(event.target.value);
                                                        }
                                                    }
                                        )
                            } 
                    />
                    {errors.email && <p1>Απαιτείται Email της μορφής example@example.xx</p1>}

                    <label  htmlFor="password">Κωδικός</label>
                    <input  name="password"
                            id="password"
                            placeholder="Κωδικός..."
                            {...register('password',{   pattern: /.{6,40}$/,
                                                        onChange:(event) => {
                                                            setPasswordReg(event.target.value);
                                                        } 
                                                    }
                                        )
                            }
                    />
                    {errors.password && <p1>Απαιτείται κωδικός 6 εως 40 στοιχίων.</p1>}
                    <button type="submit">Εγγραφή</button>
                </form>
            </div>
        </div>
    );
}
export default Register2;