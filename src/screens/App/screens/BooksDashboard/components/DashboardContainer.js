import React from 'react';
import PropTypes from 'prop-types';

import BookList from '../screens/BookList';
import SearchBar from '../screens/SearchBar';

const DashboardContainer = ({ filterType, filter, handleChange }) => (
  <div className="app">
    <SearchBar
      filterType={filterType}
      filter={filter}
      onChange={handleChange}
    />
    <BookList filterType={filterType} filter={filter} />
  </div>
);

DashboardContainer.propTypes = {
  filterType: PropTypes.string,
  filter: PropTypes.string,
  handleChange: PropTypes.func,
};

export default DashboardContainer;
