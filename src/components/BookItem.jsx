import React from "react";

function BookItem(props) {
  return(
    <div>
      <div className='Title'>Title: {props.title}</div>
      <div className='Author'>Author: {props.author}</div>
      <button>Remove</button>
    </div>
  )
}

export default BookItem;
