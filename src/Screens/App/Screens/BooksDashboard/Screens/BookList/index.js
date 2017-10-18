import { connect } from 'react-redux';

import BookListComponent from './components/BookListComponent';

const mapStateToProps = state => (
  {
    books: state.books,
    filterType: state.filterType,
    filter: state.filter
  }
);

const BookList = connect(mapStateToProps)(BookListComponent);

export default BookList;
