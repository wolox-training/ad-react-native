import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import searchImage from './assets/notifications.svg';

const SearchComponent = ({ value, handleChange }) => (
  <div className="search-component-container">
    <input className="search-input" name="filter" placeholder="Buscar..." value={value} onChange={handleChange} />
    <div className="search-img-container">
      <img src={searchImage} alt="search" />
    </div>
  </div>
);

SearchComponent.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

export default SearchComponent;
