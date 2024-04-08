import React from 'react';
import BtnFav from '../btn/BtnFav';

import './Card.scss';


const card = ({name, imageUrl }) => {
  return (
    <div className="marvel-card">
        <div className="marvel-card-container">
            <img className='marvel-card-container-img' src={imageUrl} alt={name} />
            <footer className='marvel-card-container-footer'>
                <div className="marvel-card-container-footer-info">
                    <h3>{name}</h3>
                    <BtnFav size='small' hideCounter={true}/>
                </div>
            </footer>
        </div>
    </div>
  )
}

export default card