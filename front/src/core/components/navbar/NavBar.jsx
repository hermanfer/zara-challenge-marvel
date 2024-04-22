import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import { useFavorites } from "../../../adapters/state/FavoritesContext";
import marvelLogo from "../../../resources/img/marvelLogo.svg";
import BtnFav from "../btn/BtnFav";

const NavBar = ({ isLoading, character }) => {
  const [hasFavorites, setHasFavorites] = useState(false);
  const { favoriteCount } = useFavorites();

  useEffect(() => {
    if (!isNaN(favoriteCount)) {
      setHasFavorites(favoriteCount > 0);
    }
  }, [favoriteCount]);

  return (
    <Link to="/" className="nav-bar-container-marvelLogo">
      <nav className="nav-bar">
        <div className="nav-bar-container">
          <img
            className="nav-bar-container-marvelLogo"
            src={marvelLogo}
            alt="marvel-logo"
          />
          <div className="nav-bar-container-heart">
            <BtnFav character={character} hasFavorites={hasFavorites} />
          </div>
        </div>
        {isLoading && <div className="loading-line"></div>}
      </nav>
    </Link>
  );
};

export default NavBar;
