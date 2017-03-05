import React from 'react';
import preventDefaulted from '../util/preventDefaultWrapper';

const inputStyle = {
  border: 'solid 1px #ccc',
  borderRadius: '3px',
  boxSizing: 'border-box',
  display: 'block',
  margin: '.5em',
  outline: 'none',
  padding: '.5em',
  width: '100%',
};

const submitButtonStyle = {
  background: 'none',
  border: 'solid 1px #60a3e2',
  boxSizing: 'border-box',
  color: '#60a3e2',
  cursor: 'pointer',
  display: 'block',
  fontWeight: 'bold',
  margin: '.5em',
  padding: '.5em',
  width: '100%',
};

export default function (props) {
  return (
    <form onSubmit={preventDefaulted(props.onSubmit)}>
      <input style={inputStyle} type="text" placeholder="Enter city name" />
      <button style={submitButtonStyle} type="submit">Get Weather</button>
    </form>
  );
}
