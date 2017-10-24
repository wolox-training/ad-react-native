import React from 'react';
import PropTypes from 'prop-types';

import FilterSelector from './screens/FilterSelector';
import SearchComponent from './screens/SearchComponent';
import './style.css';

const SearchBar = ({
  filterType,
  filter,
  filterHandleChange,
  filterTypeHandleChange
}) => (
  <div className="search-bar-container">
    <FilterSelector value={filterType} handleChange={filterTypeHandleChange} />
    <SearchComponent value={filter} handleChange={filterHandleChange} />
  </div>
);

SearchBar.propTypes = {
  filterType: PropTypes.string,
  filter: PropTypes.string,
  filterHandleChange: PropTypes.func,
  filterTypeHandleChange: PropTypes.func
};

export default SearchBar;
