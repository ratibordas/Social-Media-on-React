import React from 'react';
import "./Header.scss";
import logo from '../../img/logo.png';
import { Link } from 'react-router-dom';


const Header = (props) => {




    return (
        <header className="header">
            <div className="header__logo">
                <img src={logo} alt="" />
            </div>

            <div className="header__auth">
                {props.isAuth ? <h3>{props.login} - <Link to="/login"> <button onClick={props.logoutThunkCreator}>Log out</button> </Link></h3> 
                : <Link to="/login" className="header__auth__link"><h3>Login</h3></Link>}

            </div>

        </header>
    )


};


export default Header;