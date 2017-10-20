import React from 'react';
import PropTypes from 'prop-types';

import FilterSelector from './screens/FilterSelector';
import SearchComponent from './screens/SearchComponent';
import './style.css';

const SearchBar = ({ filterType, filter, handleChange }) => (
  <div className="search-bar-container">
    <FilterSelector value={filterType} handleChange={handleChange} />
    <SearchComponent value={filter} handleChange={handleChange} />
  </div>
);

SearchBar.propTypes = {
  filterType: PropTypes.string,
  filter: PropTypes.string,
  handleChange: PropTypes.func
};

export default SearchBar;
