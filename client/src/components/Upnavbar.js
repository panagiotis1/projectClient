import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/Upnavbar.css";

function Upnavbar() {
    const token = sessionStorage.getItem('token');

    const UserLogged = () => {
        if (token === null){
            return (    
                <React.Fragment>
                    <NavLink to="/login"> Είσοδος </NavLink>
                    <NavLink to="/register"> Εγγραφή </NavLink>
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <NavLink to="/profile"> Profile </NavLink>
                    <NavLink to="/menu"> Menu </NavLink>
                </React.Fragment>
            )
        }
    }
  
    return(
        <div className="upnavbar">
            <div className="rightSide">
                {UserLogged()}
            </div>
        </div>
    )
    


    // if (token === null){
    //     return (
    //         <div className="upnavbar">
    //             <div className="rightSide">
    //                 <Link to="/login"> Είσοδος </Link>
    //                 <Link to="/register"> Εγγραφή </Link>
    //             </div>
    //         </div>
    //     )
    // } else {
    //     return(
    //         <div className="upnavbar">
    //             <div className="rightSide">
    //                 <Link to="/profile"> Profile </Link>
    //                 <Link to="/menu"> Menu </Link>
    //             </div>
    //         </div>
    //     )
    // }
}

export default Upnavbar
