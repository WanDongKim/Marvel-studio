import React from 'react';

function Header(){
    return(
        <nav className="header_container">
        <div className="link-wrap">
            <div className="page-link"><a href="#home">Home</a></div>
            <div className="page-link"><a href="#about">About</a></div>
            <div className="page-link"><a href="#project">Movies</a></div>
            <div className="page-link"><a href="#contact">Series</a></div>

            <div className="page-link"><a href="#contact">Sign in</a></div>

        </div>
    </nav>
    );
}

export default Header;
