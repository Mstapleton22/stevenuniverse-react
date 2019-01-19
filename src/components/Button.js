import React, { Component } from 'react';

const Button = (props) => {
  return (
    <button type="button" className="btn btn-secondary mr-2">{props.tag}</button>
  )
}
export default Button; 