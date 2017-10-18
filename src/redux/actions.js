export const actions = {
  SET_FILTER_TYPE: 'SET_VISIBILITY_FILTER',
  SET_FILTER: 'SET_FILTER',
  SHOW_BOOK_DETAIL: 'SHOW_BOOK_DETAIL',
  SHOW_BOOK_LIST: 'SHOW_BOOK_LIST',
  REQUEST_BOOKS: 'REQUEST_BOOKS',
  RECEIVE_BOOKS: 'RECEIVE_BOOKS'
};

export const filterTypes = {
  author: 'Author',
  title: 'title'
};

export function setFilterType(filterType) {
  return {
    type: actions.SET_FILTER_TYPE,
    payload: { filterType }
  };
}

export function setFilter(filter) {
  return {
    type: actions.SET_FILTER,
    payload: { filter }
  };
}

export function showBookDetail(id) {
  return {
    type: actions.SHOW_BOOK_DETAIL,
    payload: { id }
  };
}

export function showBookList() {
  return {
    type: actions.SHOW_BOOK_LIST
  };
}

export function requestBooks() {
  return {
    type: actions.REQUEST_BOOKS
  };
}

export function receiveBooks(books) {
  return {
    type: actions.RECEIVE_BOOKS,
    payload: { books }
  };
}
