import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Book from './components/Book';
import books from './resources/books';
import './style.css';

class BookList extends Component {
  search = (text, filter) => (
    text.toLowerCase().indexOf(filter.toLowerCase()) > -1
  );

  check = (book) => {
    const { filter, filterType } = this.props;

    if (filterType && filter) {
      return this.search(book[filterType], filter);
    }
    return true;
  };

  render() {
    const booksComponents = books
      .filter(this.check)
      .map(book =>
        <Book key={book.id} title={book.title} author={book.author} src={book.image_url} />);

    return (
      <div className="book-list-container">
        {booksComponents}
      </div>
    );
  }
}

BookList.propTypes = {
  filterType: PropTypes.string,
  filter: PropTypes.string,
};

export default BookList;
