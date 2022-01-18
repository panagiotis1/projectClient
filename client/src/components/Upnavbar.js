import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Upnavbar.css";

function Upnavbar() {
    const loginUserNavbar = JSON.parse(sessionStorage.getItem('token'));
    let [token, setToken] = React.useState(loginUserNavbar);

    //let token = sessionStorage.getItem('token');

    // const UserLogged = () => {
    //     if (token === null){
    //         return (    
    //             <React.Fragment>
    //                 <NavLink to="/login"> Είσοδος </NavLink>
    //                 <NavLink to="/register"> Εγγραφή </NavLink>
    //             </React.Fragment>
    //         )
    //     } else {
    //         return (
    //             <React.Fragment>
    //                 <NavLink to="/profile"> Profile </NavLink>
    //                 <NavLink to="/menu"> Menu </NavLink>
    //             </React.Fragment>
    //         )
    //     }
    // }
  
    // return(
    //     <div className="upnavbar">
    //         <div className="rightSide">
    //         {typeof sessionStorage.getItem('token') == 'string' && <div>IS LOGGED0</div>}
    //         </div>
    //     </div>
    // )
    


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
        return(
            <div className="upnavbar">
                <div className="rightSide">
                    {setToken()}
                    {typeof sessionStorage.getItem('token') == 'string' && <div>
                        <Link to="/profile"> Profile </Link>
                        <Link to="/menu"> Menu </Link>
                    </div>}
                </div>
            </div>
        )
    }
}

export default Upnavbar
