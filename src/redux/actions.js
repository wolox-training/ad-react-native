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

function templateFunction(type, payloadName) {
  return payload => (dispatch, getState) => {
    dispatch({ type, payload: { [payloadName]: payload } });
    filterBooksIfNeeded(dispatch, getState().wBooks);
  };
}

export const setFilter = templateFunction(actions.SET_FILTER, 'filter');
export const receiveBooks = templateFunction(actions.RECEIVE_BOOKS, 'books');
export const setFilterType = templateFunction(actions.SET_FILTER_TYPE, 'filterType');

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
