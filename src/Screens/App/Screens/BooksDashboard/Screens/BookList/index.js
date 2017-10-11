import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Book from './Screens/Book';
import books from './Resources/books';
import './style.css';

class BookList extends Component {
  check = (book) => {
    if (this.props.filterType.length !== 0 && this.props.filter.length !== 0) {
      switch (this.props.filterType) {
        case 'Author':
          return book.author.toLowerCase().indexOf(this.props.filter.toLowerCase()) > -1;
        case 'Title':
          return book.title.toLowerCase().indexOf(this.props.filter.toLowerCase()) > -1;
        default:
          return false;
      }
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
