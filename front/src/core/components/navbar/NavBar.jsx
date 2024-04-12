import React, { useState, useEffect } from 'react';
import './NavBar.scss';
import { useFavorites } from '../../../adapters/state/FavoritesContext'
import marvelLogo from '../../../resources/img/marvelLogo.svg';
import BtnFav from '../btn/BtnFav';

const NavBar = ({ isLoading }) => {
  const [hasFavorites, setHasFavorites] = useState(false);
  const { favoriteCount } = useFavorites(); 

  useEffect(() => {
    setHasFavorites(favoriteCount > 0);
  }, [favoriteCount]);

  return (
    <nav className="nav-bar">
      <div className="nav-bar-container">
        <img className='nav-bar-container-marvelLogo' src={marvelLogo} alt="marvel-logo"/>
        <div className="nav-bar-container-heart">
          <BtnFav hasFavorites={hasFavorites} />
        </div>
      </div>
      {isLoading && <div className="loading-line"></div>} 
    </nav>
  )
}

export default NavBar;
