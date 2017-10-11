import React from 'react';
import './style.css';

const FilterSelector = (props) => {
  return (
      <div className="filter-container">
        <select className="filter-type-select" name="filterType" value={props.value} onChange={props.onChange}>
          <option value="" disabled>Seleccionar filtro</option>
          <option value="Title">Título</option>
          <option value="Author">Autor</option>
        </select>
      </div>
    );
}

export default FilterSelector;
