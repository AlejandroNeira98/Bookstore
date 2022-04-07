import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';
import styles from './Styles/BookItem.module.css';

function BookItem(props) {
  const dispatch = useDispatch();
  const { title, item_id: itemId, author } = props;
  return (
    <div className={styles.bookContainer}>
      <div className={styles.title}>
        Title:
        {title}
      </div>
      <div className={styles.author}>
        Author:
        {author}
      </div>
      <button
        type="button"
        onClick={() => dispatch(removeBook(itemId))}
        className={styles.remove}
      >
        Remove
      </button>
    </div>
  );
}

BookItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  item_id: PropTypes.string.isRequired,
};

export default BookItem;
