import React from 'react';
import PropTypes from 'prop-types';

import Book from '../Book';
import './style.css';

const generateBookList = (books) => {
  if (books) {
    return books.map(book => (
      <Book
        key={book.id}
        title={book.title}
        author={book.author}
        src={book.image_url}
      />
    ));
  }
  return null;
};

const BookListInfo = ({ books }) => (
  <div className="book-list-container">
    {generateBookList(books)}
  </div>
);

BookListInfo.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  }))
};

export default BookListInfo;
