import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";


import logo from '../../assets/images/585f9333cb11b227491c3581.png'

function Footer(){
    return(
        <div className="footer_container">
        <div className="first-row">
            <img className="footer__logo" src={logo} alt="logo"/>

            <div className="Link_container">
                <div className="page-link"><Link to='/' className="firstAnchor">Home</Link></div>
                <div className="page-link"><Link to="/about">About</Link></div>
                <div className="page-link"><Link to='/movie'>Movies</Link></div>
                <div className="page-link"><Link to='/series'>Series</Link></div>
            </div>
        </div>
        
            <div className="text_container">
            <p>&copy; 2019 Dongwan Kim  | All Movie/Series data Reserved <span>TheMovieDB</span> | All Movie/Series data Reserved <span>Marvel Studio</span></p> 
            </div>
        </div>
    );
}

export default Footer;
