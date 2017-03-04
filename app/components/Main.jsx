import React from 'react';
import Nav from './Nav';

export default function (props) {
  return (
    <div>
      <Nav />
      <h2>Cool component</h2>
      {props.children}
    </div>
  );
}
