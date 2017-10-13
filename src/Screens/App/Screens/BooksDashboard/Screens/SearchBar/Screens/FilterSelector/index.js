import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const FilterSelector = ({ value, onChange }) => (
  <div className="filter-container">
    <select className="filter-type-select" name="filterType" value={value} onChange={onChange}>
      <option value="" disabled>Seleccionar filtro</option>
      <option value="title">Título</option>
      <option value="author">Autor</option>
    </select>
  </div>
);

FilterSelector.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default FilterSelector;
