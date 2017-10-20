import { connect } from 'react-redux';

import BookListComponent from './components/BookListComponent';

const mapStateToProps = state => (
  {
    books: state.wBooks.filteredBooks
  }
);

const BookList = connect(mapStateToProps)(BookListComponent);

export default BookList;
