import React from "react";
import BookItem from "./BookItem";

const BookList = props => {
  return(
    <div className='bookList'>
      {props.bookList.map(book => (
        <BookItem title={book.title} author={book.author} key={book.id} />
      ))}
    </div>
  )
}

export default BookList;