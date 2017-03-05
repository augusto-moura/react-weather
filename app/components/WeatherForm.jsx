import React, { Component } from 'react';

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

export default class WheaterForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const location = this.locationElement.value;

    if (location !== undefined && location.length > 0) {
      this.locationElement.value = '';
      this.props.onSearch(location);
    }
  }

  render() {
    return (
      <form style={formStyle} onSubmit={this.onSubmit}>
        <input
          ref={l => (this.locationElement = l)}
          style={inputStyle}
          type="text"
          placeholder="Enter city name"
        />
        <button style={submitButtonStyle} type="submit">Get Weather</button>
      </form>
    );
  }
}
