import React from 'react';
import logo from '../assets/logo-white.png';

const Header = () => {

    return (
        <header className="header">
            <div className="header__logo-box">
                <img src={logo} alt="logo" className="header__logo" />
            </div>
            <div className="header__text-box">
                <h1 className="heading__primary">
                    <span className="heading__primary--main">Outdoors</span>
                    <span className="heading__primary--sub">is where life happens</span>
                </h1>
                <a href="#" className="btn btn--white btn--animated">Discover your tours</a>
            </div>

        </header>
    )

}


export default Header;
