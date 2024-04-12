import React from 'react';
import { Link } from 'react-router-dom'; 
import { useFavorites } from '../../../adapters/state/FavoritesContext'; // Importa el hook useFavorites
import BtnFav from '../btn/BtnFav';

import './Card.scss';

const Card = ({ name, imageUrl, id, onClick }) => {
  const { toggleFavorite } = useFavorites();

  const handleToggleFavorite = (event) => {
    event.stopPropagation();
    toggleFavorite({ id, name, imageUrl });
  };


  return (
    <Link to={`/character/${id}`} onClick={onClick} className="marvel-card-link">
      <div className="marvel-card">
        <div className="marvel-card-container">
          <img className='marvel-card-container-img' src={imageUrl} alt={name} />
          <footer className='marvel-card-container-footer'>
            <div className="marvel-card-container-footer-info">
              <h3>{name}</h3>
              {/* Maneja el evento de clic en el botón de favoritos */}
              <BtnFav size='small' hideCounter={true} character={{ id, name, imageUrl }} onClick={handleToggleFavorite} />
            </div>
          </footer>
        </div>
      </div>
    </Link>
  );
};

export default Card;
