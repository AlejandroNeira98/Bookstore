import { combineReducers, createStore } from "redux";
import * as books from "./books/books";
import * as categories from "./categories/categories";

const rootReducer = combineReducers({
  books: books.reducer,
  categories: categories.reducer,
});

const store = createStore(rootReducer);