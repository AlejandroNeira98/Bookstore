import React, { useState } from "react";
import BookList from "./BookList";
import Form from "./Form";

const Books = props => {
  return(
    <div>
      <BookList />
      <Form />
    </div>
  )
}

export default Books;