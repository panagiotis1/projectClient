import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Upnavbar.css";

function Upnavbar(props) {
    let token = sessionStorage.getItem('token');
    
    const logoutFunction = () => {
        sessionStorage.clear();
        props.setLogged(false);
    };

    if (token === null){
        return (
            <div className="upnavbar">
                <div className="rightSide">
                    <Link to="/login"> Είσοδος </Link>
                    <Link to="/register"> Εγγραφή </Link>
                </div>
            </div>
        )
    } else {
        if (props.logged) {
            return(
                <div className="upnavbar">
                    <div className="rightSide">
                        <div>
                            <Link to="/profile"> Profile </Link>
                            <Link to="/menu"> Menu </Link>
                            <Link to="/home" onClick={()=>logoutFunction()}> Logout </Link>
                        </div>
                                            
                    </div>
                </div>
            )
        } else if (!props.logged) {
            return(
                <div className="upnavbar">
                    <div className="rightSide">
                        <div>
                            <Link to="/login"> Είσοδος </Link>
                            <Link to="/register"> Εγγραφή </Link>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Upnavbar
