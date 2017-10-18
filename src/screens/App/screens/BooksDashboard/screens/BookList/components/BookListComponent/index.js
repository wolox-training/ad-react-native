import React from 'react';
import PropTypes from 'prop-types';

import Book from '../Book';
import './style.css';

const search = (text, filter) => (
  text.toLowerCase().indexOf(filter.toLowerCase()) > -1
);

const check = (filterType, filter) => (
  (book) => {
    if (filterType && filter) {
      return search(book[filterType], filter);
    }
    return true;
  }
);

const generateBookList = (books, filterType, filter) =>
  books
    .filter(check(filterType, filter))
    .map(book =>
      <Book key={book.id} title={book.title} author={book.author} src={book.image_url} />);

const BookListComponent = ({ books, filterType, filter }) => (
  <div className="book-list-container">
    {generateBookList(books, filterType, filter)}
  </div>
);

BookListComponent.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  filterType: PropTypes.string,
  filter: PropTypes.string
};

export default BookListComponent;
