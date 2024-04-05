import React, { useState } from 'react';
import PropTypes from 'prop-types';
import HeartEmpty from '../../../resources/img/heart-empty.svg';
import Heart from '../../../resources/img/heart.svg';
import './BtnFav.scss';

const BtnFav = ({ size, hideCounter }) => {
    const [isFavorited, setIsFavorited] = useState(false);
    const [favoriteCount, setFavoriteCount] = useState(0);

    const toggleFavorite = () => {
        setIsFavorited(!isFavorited);
        setFavoriteCount(isFavorited ? favoriteCount - 1 : favoriteCount + 1);
    };

  return (

    <div className='container-btn-fav'>
        <button className= 'btn-heart-fav' onClick={toggleFavorite}>
            {isFavorited ? (
                <img src={Heart} className={`heart-icon ${size}`} alt="heart-icon" />
            ) : (
                <img src={HeartEmpty} className={`heart-icon ${size}`} alt="heart-empty-icon" />
            )}
        </button>
        {!hideCounter && <span id='counter'>{favoriteCount}</span>} 
    </div>
  );

};

BtnFav.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    hideCounter: PropTypes.bool
};

export default BtnFav;