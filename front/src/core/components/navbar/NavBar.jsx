import React from 'react';
import './NavBar.scss';
import marvelLogo from '../../../resources/img/marvelLogo.svg';
import BtnFav from '../btn/BtnFav';


const NavBar = () => {
  return (
    <nav className='nav-bar'>
        <div className="nav-bar-container">
            <img className='nav-bar-container-marvelLogo' src={marvelLogo} alt="marvel-logo"/>
            <div className="nav-bar-container-heart"><BtnFav/></div>
        </div>
    </nav>
  )
}

export default NavBar;