import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const FilterSelector = ({ value, onChange }) => (
  <div className="filter-container">
    <select className="filter-type-select" name="filterType" value={value} onChange={onChange}>
      <option value="" disabled>Seleccionar filtro</option>
      <option value="Title">Título</option>
      <option value="Author">Autor</option>
    </select>
  </div>
);

FilterSelector.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default FilterSelector;
