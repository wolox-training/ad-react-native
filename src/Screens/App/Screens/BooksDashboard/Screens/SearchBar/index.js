import React from 'react';
import PropTypes from 'prop-types';

import FilterSelector from './screens/FilterSelector';
import SearchComponent from './screens/SearchComponent';
import './style.css';

const SearchBar = ({ filterType, filter, onChange }) => (
  <div className="search-bar-container">
    <FilterSelector value={filterType} onChange={onChange} />
    <SearchComponent value={filter} onChange={onChange} />
  </div>
);

SearchBar.propTypes = {
  filterType: PropTypes.string,
  filter: PropTypes.string,
  onChange: PropTypes.func
};

export default SearchBar;
