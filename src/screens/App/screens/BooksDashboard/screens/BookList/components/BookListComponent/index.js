import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const BookListComponent = ({ books }) => (
  <div className="book-list-container">
    {books}
  </div>
);

BookListComponent.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object)
};

export default BookListComponent;
