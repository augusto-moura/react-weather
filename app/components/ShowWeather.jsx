import React, { Component } from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import OpenWeatherAPISingleton from '../api/OpenWeatherAPI';


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

    const onTempFetched = ({ name, main: { temp } }) => this.setState({
      temp,
      location: name,
      isLoading: false,
    });

    const onFetchTempError = () => this.setState({
      isLoading: false,
    });

    OpenWeatherAPISingleton
      .getTemp(location)
      .then(onTempFetched)
      .catch(onFetchTempError);
  }

  render() {
    const { isLoading, temp, location } = this.state;

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        {
          isLoading
            ? <div className="text-center">Fetching weather</div>
            : Boolean(location) && <WeatherMessage temp={temp} location={location} />
        }
      </div>
    );
  }
}
