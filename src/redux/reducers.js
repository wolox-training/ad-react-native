import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import Immutable from 'seamless-immutable';

import { actions } from './actions';

const defaultState = Immutable({
  wBooks: {
    filterType: '',
    filter: '',
    books: [],
    filteredBooks: []
  },
  isFetching: false,
  bookDetail: null
});

const search = (text, filter) => (
  text.toLowerCase().indexOf(filter.toLowerCase()) > -1
);

const booksSelector = state => state.books;
const filterTypeSelector = state => state.filterType;
const filterSelector = state => state.filter;

const filteredBooksSelector = createSelector(
  booksSelector,
  filterTypeSelector,
  filterSelector,
  (books, filterType, filter) => books.filter(book => search(book[filterType], filter))
);

function wBooks(state = defaultState.wBooks, action) {
  switch (action.type) {
    case actions.SET_FILTER_TYPE:
      return state.merge({ filterType: action.payload.filterType });

    case actions.SET_FILTER:
      return state.merge({ filter: action.payload.filter });

    case actions.RECEIVE_BOOKS:
      return state.merge({ books: action.payload.books, filteredBooks: action.payload.books });

    case actions.FILTER_BOOKS:
    {
      const filteredBooks = filteredBooksSelector(state);
      return state.merge({ filteredBooks });
    }

    default:
      return state;
  }

}

function isFetching(state = defaultState.isFetching, action) {
  switch (action.type) {
    case actions.REQUEST_BOOKS:
      return true;

    case actions.RECEIVE_BOOKS:
      return false;

    default:
      return state;
  }
}

function bookDetail(state = defaultState.bookDetail, action) {
  switch (action.type) {
    case actions.SHOW_BOOK_DETAIL:
      return action.payload.id;

    case actions.SHOW_BOOK_LIST:
      return null;

    default:
      return state;
  }
}

const wBookApp = combineReducers({
  wBooks,
  isFetching,
  bookDetail
});

export default wBookApp;
