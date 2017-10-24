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

export function setFilterType(filterType) {
  return (dispatch, getState) => {
    dispatch({ type: actions.SET_FILTER_TYPE, payload: { filterType } });
    const nextState = getState().wBooks;
    if (nextState.filterType && nextState.filter && nextState.books.length > 0) {
      dispatch(filterBooks(nextState.filterType, nextState.filter));
    }
  };
}

export function setFilter(filter) {
  return (dispatch, getState) => {
    dispatch({ type: actions.SET_FILTER, payload: { filter } });
    const nextState = getState().wBooks;
    if (nextState.filterType && nextState.filter !== null && nextState.books.length > 0) {
      dispatch(filterBooks(nextState.filterType, nextState.filter));
    }
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
    const nextState = getState().wBooks;
    if (nextState.filterType && nextState.filter && nextState.books.length > 0) {
      dispatch(filterBooks(nextState.filterType, nextState.filter));
    }
  };
}
