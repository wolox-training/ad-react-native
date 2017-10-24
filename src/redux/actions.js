export const actions = {
  SET_FILTER_TYPE: 'SET_FILTER_TYPE',
  SET_FILTER: 'SET_FILTER',
  SHOW_BOOK_DETAIL: 'SHOW_BOOK_DETAIL',
  SHOW_BOOK_LIST: 'SHOW_BOOK_LIST',
  REQUEST_BOOKS: 'REQUEST_BOOKS',
  RECEIVE_BOOKS: 'RECEIVE_BOOKS',
  FILTER_BOOKS: 'FILTER_BOOKS'
};

export const filterTypes = {
  author: 'author',
  title: 'title'
};

export function filterBooks(filterType, filter) {
  return {
    type: actions.FILTER_BOOKS,
    payload: {
      filterType,
      filter
    }
  };
}

function filterBooksIfNeeded(dispatch, state) {
  const { filterType, filter, books } = state;
  if (filterType && filter !== null && books.length > 0) {
    dispatch(filterBooks(filterType, filter));
  }
}

export function setFilterType(filterType) {
  return (dispatch, getState) => {
    dispatch({ type: actions.SET_FILTER_TYPE, payload: { filterType } });
    filterBooksIfNeeded(dispatch, getState().wBooks);
  };
}

export function setFilter(filter) {
  return (dispatch, getState) => {
    dispatch({ type: actions.SET_FILTER, payload: { filter } });
    filterBooksIfNeeded(dispatch, getState().wBooks);
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
  return (dispatch, getState) => {
    dispatch({ type: actions.RECEIVE_BOOKS, payload: { books } });
    filterBooksIfNeeded(dispatch, getState().wBooks);
  };
}
