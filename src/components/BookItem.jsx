import React from "react";
import { useDispatch } from "react-redux";
import { removeBook } from '../redux/books/books'

function BookItem(props) {
  const dispatch = useDispatch();
  return(
    <div>
      <div className='Title'>Title: {props.title}</div>
      <div className='Author'>Author: {props.author}</div>
      <button onClick={ () => dispatch(removeBook(props.item_id)) }>Remove</button>
    </div>
  )
}

export default BookItem;
