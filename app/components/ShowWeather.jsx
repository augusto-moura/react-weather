import React, { Component } from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import OpenWeatherAPISingleton from '../api/OpenWeatherAPI';

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

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(location) {
    OpenWeatherAPISingleton
      .getTemp(location)
      .then((obj) => {
        const temp = obj.main.temp;
        this.setState({ location, temp });
        return temp;
      });
  }

  render() {
    const { temp, location } = this.state;

    return (
      <div style={containerStyle}>
        <h1 style={titleStyle}>Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        <WeatherMessage temp={temp} location={location} />
      </div>
    );
  }
}
