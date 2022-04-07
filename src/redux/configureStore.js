import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import books from './books/books';
import categories from './categories/categories';

export const url ='https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/cztRrb2hdveZJBbq0L1F/';

const rootReducer = combineReducers({
  books,
  categories,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
