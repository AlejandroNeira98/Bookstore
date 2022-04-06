import { v4 } from "uuid";
const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

const defaultBooks = [
    {id: v4(), author: 'George Martin', title: 'Game Of Thrones' },
    {id: v4(), author: 'Mario Mendoza', title: 'Satanas'},
  ];

export default function reducer(state = defaultBooks, action) {
  switch (action.type) {
    case ADD:
      return [...state, action.book];
    case REMOVE:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
}

export function addBook(book) {
  return {
    type: ADD,
    book,
  };
}

export function removeBook(id) {
  return {
    type: REMOVE,
    id,
  };
}
