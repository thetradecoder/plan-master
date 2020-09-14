import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'jquery/dist/jquery.min.js';


export default function Navbar (){
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a href="/plan-master/" className="navbar-brand">tradecoder</a>
                </div>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#main-menu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="main-menu" className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><Link to = "/plan-master/" className="nav-link">Set Plans</Link></li>
                        <li className="nav-item"><Link to = "/plan-master/shortplan/" className="nav-link">Short Term Plan</Link></li>
                        <li className="nav-item"><Link to ="/plan-master/longplan/" className="nav-link">Long Term Plan</Link></li>
                    </ul>
                </div>
            </div>

        </nav>
    );
}