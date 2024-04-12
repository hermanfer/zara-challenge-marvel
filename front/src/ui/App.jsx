import React, { useState, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../ui/pages/home/Home';
import CardDetail from '../ui/pages/cardDetail/CardDetail';
import NavBar from '../core/components/navbar/NavBar';
import { buildApiUrl } from '../adapters/api/buildApiUrl';
import { fetchData } from '../adapters/api/fetchData';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const fetchCharacterData = async (id) => {
    try {
      setIsLoading(true);
      const url = buildApiUrl(id);
      const data = await fetchData(url);
      setIsLoading(false);
      setSelectedCharacter(data);
    } catch (error) {
      console.error('Error fetching character data:', error);
      setIsLoading(false);
      throw error;
    }
  };

  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home isLoading={isLoading} fetchCharacterData={fetchCharacterData} setSelectedCharacter={setSelectedCharacter} />}
          />
          <Route path="/character/:id" element={<CardDetail selectedCharacter={selectedCharacter} />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
