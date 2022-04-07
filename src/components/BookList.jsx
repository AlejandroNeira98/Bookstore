import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import BookItem from "./BookItem";

const BookList = props => {
  const books = useSelector((state) => state.books, shallowEqual);
  return(
    <div className='bookList'>
      {books.map(book => (
        <BookItem title={book.title} author={book.author} key={book.item_id} id={book.item_id}/>
      ))}
    </div>
  )
}

export default BookList;