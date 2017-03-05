import React from 'react';
import Nav from './Nav';

const containerStyle = {
  width: '100vw',
};

export default function Main(props) {
  return (
    <div style={containerStyle}>
      <Nav />
      {props.children}
    </div>
  );
}
