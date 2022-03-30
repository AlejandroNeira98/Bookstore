import React, { useState } from "react";
import BookList from "./BookList";
import Form from "./Form";
import { v4 } from "uuid";

const Books = props => {
  const [bookList, setBookList] = useState([
    {id: v4(), author: 'George Martin', title: 'Game Of Thrones' },
    {id: v4(), author: 'Mario Mendoza', title: 'Satanas'},
  ])
  return(
    <div>
      <BookList bookList={bookList} />
      <Form />
    </div>
  )
}

export default Books;