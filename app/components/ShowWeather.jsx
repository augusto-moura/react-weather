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


export function renderMessage(isLoading, temp, location) {
  if (isLoading) {
    return <div>Fetching weather</div>;
  } else if (temp && location) {
    return <WeatherMessage temp={temp} location={location} />;
  }

  return null;
}


export default class ShowWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(location) {
    this.setState({ isLoading: true });

    OpenWeatherAPISingleton
      .getTemp(location)
      .then((obj) => {
        const temp = obj.main.temp;
        console.log('cool');

        this.setState({
          location: obj.name,
          temp,
          isLoading: false,
        });

        return temp;
      })
      .catch((err) => {
        alert(err.message);
        console.error(err);

        this.setState({
          isLoading: false,
        });
      });
  }

  render() {
    const { isLoading, temp, location } = this.state;

    return (
      <div style={containerStyle}>
        <h1 style={titleStyle}>Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage(isLoading, temp, location)}
      </div>
    );
  }
}
