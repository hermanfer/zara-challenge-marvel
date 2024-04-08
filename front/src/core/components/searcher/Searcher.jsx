import React from 'react';
import SearchIcon from '../../../resources/img/search-icon.svg';

import './Searcher.scss';

const Searcher = () => {
  return (
    <div className="container-searcher">
        <label>
            <input type="search" name="searcher" id="searcher" placeholder='Search a character...'/>
            <img src={SearchIcon} alt="search-icon"/>
        </label>
        <p>50 results</p>
    </div>
  );
}

export default Searcher;
