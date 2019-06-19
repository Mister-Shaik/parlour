import React from 'react';
import tachyons from 'tachyons';
import {Link} from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return(
        <div className="nav pb4 w-100">
        <nav class="navbar navbar-expand-md w-100">
            <Link class="navbar-brand f3 white" to="/">Noor Beauty Parlour</Link>
            <button class="navbar-toggler grow" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <Link class="nav-link" to="/">Home</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/services">Services</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/tips">Beauty Tips</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/about">About Us</Link>
                </li>
                </ul>
            </div>
        </nav>
            <div className="tc w-100 white">
                <h2 className="f3 pt4">BEAUTY SERVICES</h2>
                <h4 className="f5">STUNNING LOOKS, UTMOST SATISFACTION, AND BEST TREATMENT</h4>
            </div>
        </div>
    )
};

export default Navigation;