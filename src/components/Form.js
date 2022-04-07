import React, { useState } from 'react';
import { v4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import styles from './Styles/Form.module.css';

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
    const id = v4();
    console.log(id);
    dispatch(addBook({
      title, author, item_id: id, category: '',
    }));
  };

  return (
    <form className="form">
      <h3 className={styles.title}>ADD NEW BOOK</h3>
      <input className={styles.input} type="text" placeholder="Book Title" onChange={(e) => getTitleInput(e)} value={title} />
      <input className={styles.input} type="text" placeholder="Book Author" onChange={(e) => getAuthorInput(e)} value={author} />
      <button className={styles.button} type="submit" value="Submit" onClick={(e) => dispatchBook(e)}> Submit </button>
    </form>
  );
}

export default Form;
