import { url } from '../configureStore';

const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';
const FETCH_BOOKLIST = 'bookstore/books/FETCH_BOOKLIST';

export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD:
      return [...state, action.book];
    case REMOVE:
      return state.filter((book) => book.id !== action.id);
    case FETCH_BOOKLIST:
      const bookList = [];
      for (let item in action.data){
        bookList.push(action.data[item][0])
      }
      return bookList;
    default:
      return state;
  }
}

export function addBook(book) {
  return async (dispatch) => {
    await fetch(`${url}books`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({...book, item_id: book.id}),
    }).then(() => dispatch({ type: ADD, book}))
  };
}

export function removeBook(id) {
  return async (dispatch) => {
    await fetch(`${url}books/${id}`,{
      method: 'DELETE'
    }).then(() => dispatch({type: REMOVE, id}))
  };
}

export function fetchBooklist(data) {
  return {
    type: FETCH_BOOKLIST,
    data,
  };
}

export const getBookList = () => async (dispatch) => {
    await fetch (`${url}books`)
      .then(response => response.json())
      .then(data => dispatch(fetchBooklist(data)));
}
