import React from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../../../adapters/state/FavoritesContext";
import BtnFav from "../btn/BtnFav";

import "./Card.scss";

const Card = ({ name, imageUrl, id, onClick }) => {
  const { favorites } = useFavorites();
  const isCharacterFavorited = favorites.some((favorite) => favorite.id === id);

  return (
    <Link
      to={`/character/${id}`}
      onClick={onClick}
      className="marvel-card-link"
      data-testid="marvel-card-link-test-link"
    >
      <div>
        <div className="marvel-card">
          <div className="marvel-card-container">
            <img
              className="marvel-card-container-img"
              src={imageUrl}
              alt={name}
            />
            <footer className="marvel-card-container-footer">
              <div className="marvel-card-container-footer-info">
                <h3>{name}</h3>
                <BtnFav
                  size="small"
                  hideCounter={true}
                  character={{ id, name, imageUrl }}
                  hasFavorites={isCharacterFavorited}
                />
              </div>
            </footer>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
