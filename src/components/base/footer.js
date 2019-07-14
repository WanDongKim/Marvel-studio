import React from 'react';
import logo from '../../assets/images/585f9333cb11b227491c3581.png'
function Footer(){
    return(
        <div className="footer_container">
            <img src={logo} />
            <p>this is footer</p>
            <div>
                About this
                Movies
                Series

                Sign In
            </div>
        </div>
    );
}

export default Footer;
