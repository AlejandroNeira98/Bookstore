import React, { useState } from "react";
import { addBook } from "../redux/books/books";
import { v4 } from "uuid";
import { useDispatch } from "react-redux";

function Form() {
  const [ title, setTitle ] = useState('');
  const [ author, setAuthor ] = useState('');

  const getAuthorInput = (e) => {
    const Author = e.target.value;
    setAuthor(Author);
  };
  const getTitleInput = (e) => {
    const Title = e.target.value;
    setTitle(Title);
  };
  const dispatchBook = (e) => {
    e.preventDefault();
    useDispatch(addBook({ title, author, id: v4() }))
  };

  return(
    <form className='form'>
      <h3>ADD NEW BOOK</h3>
      <input type='text' placeholder='Book Title' onChange={ () => getTitleInput() }> { title } </input>
      <input type='text' placeholder='Book Author' onChange={ () => getAuthorInput() }> { author } </input>
      <button type='submit' value='Submit' onClick={ () => dispatchBook() }/>
    </form>
  )
}

export default Form;
