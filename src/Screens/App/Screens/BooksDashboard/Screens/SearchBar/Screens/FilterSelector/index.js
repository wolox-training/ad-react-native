import React from 'react';
import PropTypes from 'prop-types';

import { selectFilterText, authorText, titleText } from './strings/strings';
import './style.css';

const FilterSelector = ({ value, onChange }) => (
  <div className="filter-container">
    <select className="filter-type-select" name="filterType" value={value} onChange={onChange}>
      <option value="" disabled>{selectFilterText}</option>
      <option value="title">{titleText}</option>
      <option value="author">{authorText}</option>
    </select>
  </div>
);

FilterSelector.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default FilterSelector;
