const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD:
      return [...state, action.book];
    case REMOVE:
      return state.map((book) => {
        if (book.id !== action.id) {
          return book;
        } else { return };
      });
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
