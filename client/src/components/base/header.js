import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Image_logo from '../../assets/images/Marvel_Studios_2016_logo.png';
function Header({location}){
    return  <Navbar location={location}/>
}
const Navbar = ({location}) => {
    const isLoggedIn = sessionStorage.getItem('token');
    const logout = () => {
        sessionStorage.removeItem("user");
        sessionStorage.removeItem("token");
        window.location.reload();
    }
    const userStyle = {
        color: 'red'
    };
    const username = sessionStorage.getItem('username')
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
    
            {
                isLoggedIn ? 
                <Fragment>
                <div className="page-link" style={userStyle}>
                Hello, &nbsp;{sessionStorage.getItem('user')}
                </div> 
                <div className="page-link">
                    <a onClick={logout}>Logout</a>
                </div> 
                </Fragment>

                :
                <div className="page-link"><Link to='/login'>Log in</Link></div>
            }
    
        </div>
    </nav>
    )        
}

export default Header;
