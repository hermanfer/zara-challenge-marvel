import React, { Suspense, useState, useEffect } from 'react';
import Searcher from '../../../core/components/searcher/Searcher';
import { fetchData }  from '../../../adapters/api/fetchData';
import Card from '../../../core/components/card/Card';

//import CardDetail from '../cardDetail/CardDetail';


import './Home.scss';


const Home = () => {

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="home-page">
        <div className="home-page-container"> 
        <Searcher onSearch={handleSearch}/>
        <div className="home-page-container-cards">
        <Suspense fallback={<div>Loading...</div>}>
            <CharacterList searchQuery={searchQuery} />
          </Suspense>
        </div>

        </div>

        
    </div>
  )
}

const CharacterList = ({ searchQuery }) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    if (searchQuery === '') {
      setResource(fetchData("https://gateway.marvel.com:443/v1/public/characters?ts=1&limit=50&apikey=12bcb82570057829e28513a85d0c78ce&hash=21c65676f13c349c8cbeea0605c3b4ee"));
    } else {
      const url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${encodeURIComponent(searchQuery)}&ts=1&limit=50&apikey=12bcb82570057829e28513a85d0c78ce&hash=21c65676f13c349c8cbeea0605c3b4ee`;
      setResource(fetchData(url));
    }
  }, [searchQuery]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CharacterListContent resource={resource} />
    </Suspense>
  );
};


const CharacterListContent = ({ resource }) => {
  const characters = resource ? resource.read() : [];

  return (
    <>
      {characters.map(character => (
        <Card
          key={character.id}
          name={character.name}
          imageUrl={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        />
      ))}
    </>
  );
};



export default Home;