import React, { useState, useEffect, Suspense } from 'react';
import SearchIcon from '../../../resources/img/search-icon.svg';
import { buildApiUrl } from '../../../adapters/api/buildApiUrl'; // Importa tu función buildApiUrl

import './Searcher.scss';

const Searcher = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    if (searchQuery !== '') {
      setLoading(true);
      const apiUrl = buildApiUrl(searchQuery);
      console.log("API URL:", apiUrl);
      fetchDataTotalResults(apiUrl)
        .then(total => {
          console.log("Total results:", total);
          setTotalResults(total || 0);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching total results:', error);
          setLoading(false);
        });
    }
  }, [searchQuery]);

  const fetchDataTotalResults = async (apiUrl) => {
    try {
      const response = await fetch(apiUrl);
      const jsonData = await response.json();
      console.log("API Response:", jsonData);
      return jsonData.data.total || 0;
    } catch (error) {
      console.error('Error fetching total results:', error);
      throw error;
    }
  };
  

  const handleChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  };
  
  return (
    <div className="container-searcher">
      <label>
        <input type="search" name="searcher" id="searcher" value={searchQuery} onChange={handleChange} placeholder='Search a character...' />
        <img src={SearchIcon} alt="search-icon"/>
      </label>
      <Suspense fallback={<p>Loading...</p>}>
        <p>{searchQuery ? `${totalResults} results found` : '50 results'}</p>
      </Suspense>
    </div>
  );
}

export default Searcher;
