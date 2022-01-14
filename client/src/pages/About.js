import React from 'react';
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";

function About() {
    return (
        <div className="about">
            <div 
                className="aboutTop"
                style={{ backgroundImage: `url(${MultiplePizzas})` }}
            ></div>
            <div className="aboutBottom">
                <h1>ΣΧΕΤΙΚΑ ΜΕ ΕΜΑΣ</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Morbi sapien nulla, placerat eget justo quis, rhoncus ornare risus. 
                Nunc pellentesque sapien diam, vel lobortis ipsum tempor eu. 
                Aenean mollis cursus mauris porttitor scelerisque. Sed eget ante efficitur, 
                pellentesque ipsum in, varius elit. Donec a luctus lorem. 
                Nulla blandit sem ac sem convallis scelerisque. 
                Mauris sodales quam et ex bibendum venenatis. 
                Pellentesque sed semper lorem. Mauris eget ante ullamcorper, 
                faucibus odio ac, interdum nisi. Aliquam erat volutpat. 
                Sed ligula tellus, porta sit amet tellus at, porttitor porta nibh. 
                Quisque consectetur faucibus velit ac molestie. Nam sed dui facilisis, 
                molestie justo non, condimentum lorem.
                </p>
            </div>
        </div>
    )
}

export default About
