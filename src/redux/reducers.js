import { combineReducers } from 'redux';

import { actions } from './actions';

const defaultState = {
  filterType: '',
  filter: '',
  books: [],
  isFetching: false,
  bookDetail: null
};

function filterType(state = defaultState.filterType, action) {
  switch (action.type) {
    case actions.SET_FILTER_TYPE:
      return action.payload.filterType;

    default:
      return state;
  }
}

function filter(state = defaultState.filter, action) {
  switch (action.type) {
    case actions.SET_FILTER:
      return action.payload.filter;

    default:
      return state;
  }
}

function books(state = defaultState.books, action) {
  switch (action.type) {
    case actions.RECEIVE_BOOKS:
      return action.payload.books;

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
  filterType,
  filter,
  books,
  isFetching,
  bookDetail
});

export default wBookApp;
