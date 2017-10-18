import React from 'react';
import { connect } from 'react-redux';

import Book from './components/Book';
import BookListComponent from './components/BookListComponent';

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

const mapStateToProps = state => (
  {
    books: generateBookList(state.books, state.filterType, state.filter)
  }
);

const BookList = connect(mapStateToProps)(BookListComponent);

export default BookList;
