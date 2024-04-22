import React from "react";
import { useFavorites } from "../../../adapters/state/FavoritesContext";
import PropTypes from "prop-types";
import HeartEmpty from "../../../resources/img/heart-empty.svg";
import Heart from "../../../resources/img/heart.svg";
import "./BtnFav.scss";

const BtnFav = ({ size, hideCounter, character, hasFavorites }) => {
  const { toggleFavorite, favorites, favoriteCount } = useFavorites();

  const isFavorited = () => {
    return character && favorites.some((fav) => fav.id === character.id);
  };

  const handleToggleFavorite = () => {
    toggleFavorite(character);
  };

  return (
    <div className="container-btn-fav">
      <button className="btn-heart-fav" onClick={handleToggleFavorite}>
        {hasFavorites ? (
          <img
            src={favoriteCount > 0 ? Heart : HeartEmpty}
            className={`heart-icon ${size}`}
            alt="heart-icon"
          />
        ) : (
          <img
            src={isFavorited() ? Heart : HeartEmpty}
            className={`heart-icon ${size}`}
            alt="heart-icon"
          />
        )}
      </button>
      {!hideCounter && <span id="counter">{favoriteCount}</span>}
    </div>
  );
};

BtnFav.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  hideCounter: PropTypes.bool,
  character: PropTypes.object,
  hasFavorites: PropTypes.bool,
};

export default BtnFav;
