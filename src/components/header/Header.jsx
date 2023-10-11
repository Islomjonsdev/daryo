import React from 'react';
import "./Header.scss"
import { Link } from 'react-router-dom';
import daryoLogo from "../../assets/images/logo.svg"

const Header = () => {
  return (
    <div className='header__top'>
        <div className='container'>
            <Link className='header__top__link' to="/">
                <img className='header__top__logo' src={daryoLogo} alt="" />
            </Link>
        </div>
    </div>
  )
}

export default Header