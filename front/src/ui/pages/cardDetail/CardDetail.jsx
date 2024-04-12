import React, { Suspense } from 'react';
import BtnFav from '../../../core/components/btn/BtnFav';
import { useFavorites } from '../../../adapters/state/FavoritesContext';
import Carousel from '../../../core/components/carousel/Carousel'
import './CardDetail.scss';

const CardDetail = ({ selectedCharacter }) => {
  const { toggleFavorite } = useFavorites();

  if (!selectedCharacter) {
    return <div>No se ha seleccionado ningún personaje</div>;
  }

  const { name, description, id } = selectedCharacter;
  const imageUrl = `${selectedCharacter.thumbnail.path}.${selectedCharacter.thumbnail.extension}`;

  const handleToggleFavorite = (event) => {
    event.stopPropagation(); // Detiene la propagación del evento para evitar que se active en el contenedor de la tarjeta
    toggleFavorite({ id, name, imageUrl });
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="container-card-detail">
        <header className="card-detail-header">
          <div className="card-detail-header__img-info">
            <img className="card-detail-header__img-info-character-img" src={imageUrl} alt={name} />
            <div className="card-detail-header__img-info-info-character">
              <div className="card-detail-header__img-info-info-character-name-fav">
                <h4 className="card-detail-header__img-info-info-character-name">{name}</h4>
                <BtnFav hideCounter={true} character={{ id, name, imageUrl }} onClick={handleToggleFavorite} />
              </div>
              <p className="card-detail-header__img-info-info-character-info"> {description ? description : "Description not available"}</p>
            </div>
          </div>
        </header>

        <div className="container-comics">
          <h4>COMICS</h4>
          <Carousel characterId={id}  />
        </div>
      </div>
    </Suspense>
  );
};

export default CardDetail;
