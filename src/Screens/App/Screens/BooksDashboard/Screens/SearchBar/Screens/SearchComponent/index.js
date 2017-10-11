import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import searchImage from './Assets/notifications.svg';

const SearchComponent = props => (
  <div className="search-component-container">
    <input className="search-input" name="filter" placeholder="Buscar..." value={props.value} onChange={props.onChange} />
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
