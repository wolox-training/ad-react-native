import React, { Component } from 'react';
import FilterSelector from './Screens/FilterSelector';
import SearchComponent from './Screens/SearchComponent';
import './style.css';

const SearchBar = (props) => {
  return (
      <div className="search-bar-container">
        <FilterSelector value={props.filterType} onChange={props.onChange} />
        <SearchComponent value={props.filter} onChange={props.onChange} />
      </div>
    );
}

export default SearchBar;