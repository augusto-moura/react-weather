import React from 'react';
import Nav from './Nav';

export default function (props) {
  return (
    <div>
      <Nav />
      {props.children}
    </div>
  );
}
