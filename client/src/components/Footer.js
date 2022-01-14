import React from 'react';
import '../styles/Footer.css';
import TwitterIcon from '@material-ui/icons/Twitter';

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <TwitterIcon />
            </div>
            <p> &copy; 2021 mypizza.com</p>
        </div>
    )
}

export default Footer
