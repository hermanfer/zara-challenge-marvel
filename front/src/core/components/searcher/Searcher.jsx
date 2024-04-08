import React from 'react';
import SearchIcon from '../../../resources/img/search-icon.svg';

import './Searcher.scss';

const Searcher = () => {
  return (
    <div className="container-searcher">
        <label>
        <img src={SearchIcon} alt="search-icon"/>
        <input type="search" name="searcher" id="searcher" placeholder='Search a character...'/>
        </label>
    </div>
  );
}

export default Searcher;