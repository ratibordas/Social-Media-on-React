import React from 'react';
import "./Header.scss";
import logo from '../../img/logo.png';


const Header = (props) => {

    
   

    return (
        <header className="header">
            <div className="header__logo">
                <img src={logo}  alt="" />
            </div>
            
            
        </header>
    )


};


export default Header;