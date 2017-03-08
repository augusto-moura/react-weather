import React, { Component } from 'react';

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
      <form onSubmit={this.onSubmit}>
        <input
          ref={l => (this.locationElement = l)}
          type="text"
          placeholder="Enter city name"
        />
        <button className="button hollow expanded" type="submit">Get Weather</button>
      </form>
    );
  }
}
