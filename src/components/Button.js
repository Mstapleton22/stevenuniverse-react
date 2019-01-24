import React, { Component } from 'react';

const Button = (props) => {
  return (
    <button type="button" className="btn btn-secondary tags mr-2">{props.tag}</button>
  )
}
export default Button; 