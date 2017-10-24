import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { fetchBooks } from '../../../../../../redux/asyncActions';
import BookListInfo from '../BookListInfo';

class BookListFetch extends Component {
  componentWillMount() {
    this.props.dispatch(fetchBooks());
  }

  render() {
    return <BookListInfo books={this.props.books} />;
  }
}

BookListFetch.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  }))
};

export default BookListFetch;
