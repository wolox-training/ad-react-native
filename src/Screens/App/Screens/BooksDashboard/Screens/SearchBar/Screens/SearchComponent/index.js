import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import searchImage from './assets/notifications.svg';

const SearchComponent = ({ value, onChange }) => (
  <div className="search-component-container">
    <input className="search-input" name="filter" placeholder="Buscar..." value={value} onChange={onChange} />
    <div className="search-img-container">
      <img src={searchImage} alt="search" />
    </div>
  </div>
);

SearchComponent.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default SearchComponent;
