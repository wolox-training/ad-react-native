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
  let nextState = state;
  switch (action.type) {
    case actions.SET_FILTER_TYPE:
      nextState = nextState.merge({ filterType: action.payload.filterType });
      break;

    case actions.SET_FILTER:
      nextState = nextState.merge({ filter: action.payload.filter });
      break;

    case actions.RECEIVE_BOOKS:
      nextState = nextState.merge({ books: action.payload.books });
      break;

    default:
      return state;
  }

  if (nextState.filterType && nextState.filter && nextState.books.length > 0) {
    const filteredBooks = filteredBooksSelector(nextState);
    nextState = nextState.merge({ filteredBooks });
  } else {
    nextState = nextState.merge({ filteredBooks: nextState.books });
  }

  return nextState;
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
