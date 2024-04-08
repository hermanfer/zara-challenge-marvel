import React from 'react';
import BtnFav from '../btn/BtnFav';
//import MarvelApi from '../../../adapters/api/MarvelApi';
import DemoImg from '../../../resources/img/example-char.png';

import './Card.scss';

//name, imageUrl <MarvelApi/>


const card = ({}) => {
  return (
    <div className="marvel-card">
      
        <div className="marvel-card-container">
            <img className='marvel-card-container-img' src={DemoImg} alt='demo' />
            <footer className='marvel-card-container-footer'>
                <div className="marvel-card-container-footer-info">
                    <h3>Adam Warlok</h3>
                    <BtnFav size='small' hideCounter={true}/>
                </div>
            </footer>
        </div>
    </div>
  )
}

export default card