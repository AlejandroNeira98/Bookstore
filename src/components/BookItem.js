import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';
import './Styles/BookItem.css';

function BookItem(props) {
  const dispatch = useDispatch();
  const { title, item_id: itemId, author } = props;
  return (
    <div>
      <div className="Title">
        Title:
        {title}
      </div>
      <div className="Author">
        Author:
        {author}
      </div>
      <button type="button" onClick={() => dispatch(removeBook(itemId))}>Remove</button>
    </div>
  );
}

BookItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  item_id: PropTypes.string.isRequired,
};

export default BookItem;
