import { connect } from 'react-redux';

import BookListFetch from './components/BookListFetch';

const mapStateToProps = state => (
  {
    books: state.wBooks.filteredBooks
  }
);

const BookList = connect(mapStateToProps)(BookListFetch);

export default BookList;
