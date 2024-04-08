import React, { useState } from 'react';
import SearchIcon from '../../../resources/img/search-icon.svg';

import './Searcher.scss';

const Searcher = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="container-searcher">
        <label>
            <input type="search" name="searcher" id="searcher" value={searchQuery} onChange={handleChange} placeholder='Search a character...' />
            <img src={SearchIcon} alt="search-icon"/>
        </label>
        <p>50 results</p>
    </div>
  );
}

export default Searcher;