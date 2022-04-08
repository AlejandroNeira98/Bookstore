import React, { useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { getBookList } from '../redux/books/books';
import BookItem from './BookItem';

const BookList = () => {
  const books = useSelector((state) => state.books, shallowEqual);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBookList());
  }, []);
  return (
    <div className="bookList">
      {books.map((book) => (
        <BookItem
          title={book.title}
          author={book.author}
          key={book.item_id}
          item_id={book.item_id}
        />
      ))}
    </div>
  );
};

export default BookList;
