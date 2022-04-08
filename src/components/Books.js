import React from 'react';
import BookList from './BookList';
import Form from './Form';
import styles from './Styles/Books.module.css';

const Books = () => (
  <div className={styles.center}>
    <BookList />
    <Form />
  </div>
);

export default Books;
