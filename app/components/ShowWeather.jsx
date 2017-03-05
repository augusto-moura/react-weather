import React, { Component } from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';

const containerStyle = {
  width: '30em',
  maxWidth: '100vw',
  margin: '0 auto',
};

const titleStyle = {
  fontSize: '3em',
  padding: '.5em',
  textAlign: 'center',
};

export default class ShowWeather extends Component {

  constructor(props) {
    super(props);

    this.state = {
      location: 'Miami',
      temp: 32,
    };

    this.onWheatherFormSearch = this.onWheatherFormSearch.bind(this);
  }

  onWheatherFormSearch(location) {
    this.setState({
      location,
      temp: 26,
    });
  }

  render() {
    return (
      <div style={containerStyle}>
        <h1 style={titleStyle}>Get Weather</h1>
        <WeatherForm onSearch={this.onWheatherFormSearch} />
        <WeatherMessage themperature={this.state.temp} location={this.state.location} />
      </div>
    );
  }
}
