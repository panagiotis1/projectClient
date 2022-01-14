import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/pizza.jpeg';
import '../styles/Home.css';

function Home() {
    return (
        <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
            {typeof sessionStorage.getItem('token') == 'string' && <div>IS LOGGED0</div>}
            <div
                className="headerContainer"
            >
                <h1>Η ΠΙΤΣΑ ΣΟΥ</h1>
                <p>Η καλύτερη πιτσα στην πολη!!!</p>
                <Link to="/menu">
                    <button>Παράγγειλε τώρα.</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;
