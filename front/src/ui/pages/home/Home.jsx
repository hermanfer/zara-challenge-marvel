import React, { useState } from 'react';
import './Home.scss';
import CardDetail from '../cardDetail/CardDetail';
//import MarvelApi from '../../../adapters/api/MarvelApi';
//import Searcher from '../../../core/components/searcher/Searcher';
//import Card from '../../../core/components/card/Card'

//{characters.map(character => (
  //<Card key={character.id} name={character.name} imageUrl={`${character.thumbnail.path}.${character.thumbnail.extension}`} />
//))}

//<MarvelApi setCharacters={setCharacters} />

const Home = () => {

  //const [characters, setCharacters] = useState([]);
  //<Searcher/>

  return (
    <div className="home-page">
        <div className="home-page-container"> 
         
        <div className="home-page-container-cards">

        </div>


        </div>

        <CardDetail/> 
    </div>
  )
}

export default Home;