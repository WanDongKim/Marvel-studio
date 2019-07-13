import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Image_logo from '../../assets/images/Marvel_Studios_2016_logo.png';
function Header(){
    return(
        <nav className="header_container">
        <div className="link-wrap">
            <div className="page-logo">
                <img src={Image_logo} />
            </div>
            <div className="page-link"><Link to='/' className="firstAnchor">Home</Link></div>
            <div className="page-link"><a href="#about">About</a></div>
            <div className="page-link"><Link to='/movie'>Movies</Link></div>
            <div className="page-link"><Link to='/series'>Series</Link></div>

            <div className="page-link"><a href="#contact">Sign in</a></div>

        </div>
    </nav>
    );
}

export default Header;
