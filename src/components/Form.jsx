import React from "react";

function Form() {
  return(
    <form className='form'>
      <h3>ADD NEW BOOK</h3>
      <input type='text' placeholder='Book Title'></input>
      <input type='text' placeholder='Book Author'></input>
      <button type='submit' value='Submit' />
    </form>
  )
}

export default Form;
