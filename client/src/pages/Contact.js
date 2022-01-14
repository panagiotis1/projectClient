import React from 'react';
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css";

function Contact() {
    return (
        <div className="contact">
            <div 
                className="leftSide"
                style={{ backgroundImage: `url(${PizzaLeft})` }}
            ></div>
            <div className="rightSide">
                <h1>Επικοινωνήστε μαζί μας</h1>

                <form id="contact-form" method="POST">
                    <label htmlFor="name">Όνομα</label>
                    <input name="name" placeholder="Όνομα..." type="text"/>
                    <label htmlFor="email">Email</label>
                    <input name="email" placeholder="Email..." type="text"/>
                    <label htmlFor="message">Μήνυμα</label>
                    <textarea
                        rows="6"
                        placeholder="Γράψτε μας το μήνυμά σας..."
                        name="message"
                        required
                    ></textarea>
                    <button type="submit">Αποστολή μηνύματος</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
