import React from 'react';
import PropTypes from 'prop-types';

import BookList from '../screens/BookList';
import SearchBar from '../screens/SearchBar';

const DashboardContainer = ({
  filterType,
  filter,
  filterHandleChange,
  filterTypeHandleChange
}) => (
  <div className="app">
    <SearchBar
      filterType={filterType}
      filter={filter}
      filterHandleChange={filterHandleChange}
      filterTypeHandleChange={filterTypeHandleChange}
    />
    <BookList />
  </div>
);

DashboardContainer.propTypes = {
  filterType: PropTypes.string,
  filter: PropTypes.string,
  filterHandleChange: PropTypes.func,
  filterTypeHandleChange: PropTypes.func
};

export default DashboardContainer;
