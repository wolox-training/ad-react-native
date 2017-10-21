import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Book from '../Book';
import './style.css';
import { fetchBooks } from '../../../../../../redux/asyncActions';

const generateBookList = (books) => {
  if (books) {
    return books
      .map(book =>
        <Book key={book.id} title={book.title} author={book.author} src={book.image_url} />);
  }
  return null;
};

class BookListComponent extends Component {
  componentWillMount() {
    this.props.dispatch(fetchBooks());
  }

  render() {
    return (
      <div className="book-list-container">
        {generateBookList(this.props.books)}
      </div>
    );
  }
}

BookListComponent.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  }))
};

export default BookListComponent;
