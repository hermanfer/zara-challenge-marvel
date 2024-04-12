import React, { useState, useEffect } from 'react';
import SearchIcon from '../../../resources/img/search-icon.svg';
import { fetchData } from '../../../adapters/api/fetchData';
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
      fetchDataTotalResults(apiUrl)
        .then(total => {
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
      const response = await fetchData(apiUrl);
      return response.length; // Ajusta el acceso al número de resultados
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
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>{searchQuery ? `${totalResults} results found` : '50 results'}</p>
      )}
    </div>
  );
}

export default Searcher;
