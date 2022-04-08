export const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/3jla0SR9emN3gKgXqoCm/';

const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';
const FETCH_BOOKLIST = 'bookstore/books/FETCH_BOOKLIST';

export default function reducer(state = [], action) {
  const bookList = [];
  switch (action.type) {
    case ADD:
      return [...state, action.book];
    case REMOVE:
      return state.filter((book) => book.item_id !== action.item_id);
    case FETCH_BOOKLIST:
      Object.keys(action.data).forEach((key) => {
        bookList.push({ ...action.data[key][0], item_id: key });
      });
      return bookList;
    default:
      return state;
  }
}

export function addBook(book) {
  return async (dispatch) => {
    await fetch(`${url}books`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(book),
    }).then(() => dispatch({ type: ADD, book }));
  };
}

export function removeBook(id) {
  return async (dispatch) => {
    await fetch(`${url}books/${id}`, {
      method: 'DELETE',
    }).then(() => dispatch({ type: REMOVE, item_id: id }));
  };
}

export function getBookList() {
  return async (dispatch) => {
    await fetch(`${url}books`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: FETCH_BOOKLIST, data });
        console.log(data);
      });
  };
}
