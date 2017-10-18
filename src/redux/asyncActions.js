import books from '../resources/books';

import { requestBooks, receiveBooks } from './actions';

export function fetchBooks() {
  return (dispatch) => {
    dispatch(requestBooks());

    setTimeout(
      () => dispatch(receiveBooks(books)),
      3000
    );
  };
}
