import React, { useState, useEffect } from 'react';
import Card from '../../core/components/card/Card';

const MarvelApi = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const cachedCharacters = localStorage.getItem('marvelCharacters');
        if (cachedCharacters) {
            setCharacters(JSON.parse(cachedCharacters));
        } else {
            getCharacters();
        }
    }, []);

    //public key: 79696e5ba13f7aec05cc3c0c88291424
    //private key: e9b52657e020c453822e9c0600d72ae42395d355
    //apikey: https://gateway.marvel.com:443/v1/public/characters?limit=50&apikey=79696e5ba13f7aec05cc3c0c88291424
    //ts: 1
    //hash: 37422736d68e00d4bec071b0be8a3062

    // 1e9b52657e020c453822e9c0600d72ae42395d35579696e5ba13f7aec05cc3c0c88291424

    
    async function getCharacters() {
        try {
            const res = await fetch("https://gateway.marvel.com:443/v1/public/characters?ls=1&limit=50&apikey=79696e5ba13f7aec05cc3c0c88291424&hash=37422736d68e00d4bec071b0be8a3062");
            if (!res.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await res.json();
            console.log(data);
            setCharacters(data.data.results);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

  return (
    <div className="marvel-characters">
        {characters.map(character => (
             <Card key={character.id} name={character.name} imageUrl={`${character.thumbnail.path}.${character.thumbnail.extension}`} />
        ))}
    </div>

  );
}

export default MarvelApi;