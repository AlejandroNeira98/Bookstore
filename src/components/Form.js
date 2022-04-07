import React, { useState } from 'react';
import { v4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

function Form() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
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
    dispatch(addBook({
      title, author, item_id: v4(), category: '',
    }));
  };

  return (
    <form className="form">
      <h3>ADD NEW BOOK</h3>
      <input type="text" placeholder="Book Title" onChange={(e) => getTitleInput(e)} value={title} />
      <input type="text" placeholder="Book Author" onChange={(e) => getAuthorInput(e)} value={author} />
      <button type="submit" value="Submit" onClick={(e) => dispatchBook(e)}> Submit </button>
    </form>
  );
}

export default Form;
