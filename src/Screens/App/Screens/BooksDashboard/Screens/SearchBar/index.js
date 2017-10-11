import React from 'react';
import PropTypes from 'prop-types';

import FilterSelector from './Screens/FilterSelector';
import SearchComponent from './Screens/SearchComponent';
import './style.css';

const SearchBar = props => (
  <div className="search-bar-container">
    <FilterSelector value={props.filterType} onChange={props.onChange} />
    <SearchComponent value={props.filter} onChange={props.onChange} />
  </div>
);

SearchBar.propTypes = {
  filterType: PropTypes.string,
  filter: PropTypes.string,
  onChange: PropTypes.func
};

export default SearchBar;
