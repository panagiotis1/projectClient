import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Upnavbar.css";

function Upnavbar() {

    return (
        <div className="upnavbar">
            <div className="rightSide">
                <Link to="/login"> Είσοδος </Link>
                <Link to="/register"> Εγγραφή </Link>
            </div>
        </div>
    )
}

export default Upnavbar
