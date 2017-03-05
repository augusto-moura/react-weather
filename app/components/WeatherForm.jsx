import React from 'react';
import preventDefaulted from '../util/preventDefaultWrapper';

const inputStyle = {
  border: 'solid 1px #ccc',
  borderRadius: '3px',
  boxSizing: 'border-box',
  display: 'block',
  outline: 'none',
  margin: '.5em 0',
  padding: '.5em',
  width: '100%',
};

const submitButtonStyle = {
  background: 'none',
  border: 'solid 1px #93b8db',
  borderRadius: '3px',
  boxSizing: 'border-box',
  color: '#60a3e2',
  cursor: 'pointer',
  display: 'block',
  fontWeight: 'bold',
  margin: '.5em 0',
  padding: '.5em',
  width: '100%',
};

const formStyle = {
  padding: '.3em',
};

export default function (props) {
  return (
    <form style={formStyle} onSubmit={preventDefaulted(props.onSubmit)}>
      <input style={inputStyle} type="text" placeholder="Enter city name" />
      <button style={submitButtonStyle} type="submit">Get Weather</button>
    </form>
  );
}
