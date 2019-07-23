import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Image_logo from '../../assets/images/Marvel_Studios_2016_logo.png';
function Header(){
    // const pathname = window.location.pathname;
    return  <Navbar />
}
const Navbar = () => {
    const pathname = window.location.pathname;
    const isLoggedIn = localStorage.getItem('id_token');

    return (
        <nav className="header_container">
        <div className="link-wrap">
            <div className="page-logo">
                <Link to='/' className="firstAnchor"><img src={Image_logo} /></Link>
            </div>
            <div className="page-link"><Link to='/' className="firstAnchor">Home</Link></div>
            <div className="page-link"><a href="#about">About</a></div>
            <div className="page-link"><Link to='/movie'>Movies</Link></div>
            <div className="page-link"><Link to='/series'>Series</Link></div>
    
            {isLoggedIn ? 'logout' :<div className="page-link"><Link to='/login'>Sign in</Link></div>}
    
        </div>
    </nav>
    )        
}
export default Header;
