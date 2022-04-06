import React from "react";
import { useDispatch } from "react-redux";
import { checkStatus } from '../redux/categories/categories';

function Categories() {
  const dispatch = () => useDispatch(checkStatus()); 
  return(
    <button onClick={ () => dispatch() }>Check Status</button>
  )
}

export default Categories;