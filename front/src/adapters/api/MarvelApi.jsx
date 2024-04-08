import React, { useEffect } from 'react';
//import CardList from '../../core/components/card/CardList';
//import LoadMore from '../../core/components/btn/LoadMore';

const MarvelApi = ({setCharacters}) => {

    //private: e9b52657e020c453822e9c0600d72ae42395d355
    //public: 79696e5ba13f7aec05cc3c0c88291424
    //ts: 1
    //hash: 37422736d68e00d4bec071b0be8a3062

    useEffect(() => {
       const getCharacters = async () => {
        try {
            const res = await fetch("https://gateway.marvel.com:443/v1/public/characters?ts=1&limit=14&apikey=79696e5ba13f7aec05cc3c0c88291424&hash=37422736d68e00d4bec071b0be8a3062");
            if (!res.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await res.json();
            if (data && data.data && data.data.results) {
                setCharacters(data.data.results);
            } else {
                throw new Error('Invalid data format');
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
        getCharacters();
    }, [setCharacters]);

    

};

export default MarvelApi;