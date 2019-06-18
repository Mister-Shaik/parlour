import React from 'react';
import tachyons from 'tachyons';
import {Link} from 'react-router-dom';

const Navigation = () => {
    return(
        <div className="w-100">
            <nav class="navbar navbar-expand-md bg-light-gray pl3">
            <Link class="navbar-brand" to="/">Navbar</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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
        </div>
    )
};

export default Navigation;