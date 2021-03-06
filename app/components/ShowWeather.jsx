import React, { Component } from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import ErrorModal from './ErrorModal';
import OpenWeatherAPISingleton from '../api/OpenWeatherAPI';


export default class ShowWeather extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      errorMessage: null,
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    const { location } = this.props.location.query;

    if (location) {
      this.handleSearch(location);
    }
  }

  componentWillReceiveProps(newProps) {
    const { location } = newProps.location.query;

    if (location) {
      this.handleSearch(location);
    }
  }

  handleSearch(location) {
    this.setState({
      isLoading: true,
      errorMessage: null,
      location: null,
      temp: null,
    });

    const onTempFetched = ({ name, main: { temp } }) => this.setState({
      temp,
      location: name,
      isLoading: false,
    });

    const onFetchTempError = error => this.setState({
      isLoading: false,
      errorMessage: error.message,
    });

    OpenWeatherAPISingleton
      .getTemp(location)
      .then(onTempFetched)
      .catch(onFetchTempError);
  }

  render() {
    const { isLoading, temp, location, errorMessage } = this.state;

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />

        {isLoading
            ? <div className="text-center">Fetching weather</div>
            : Boolean(location) && <WeatherMessage temp={temp} location={location} />}

        {errorMessage !== null && <ErrorModal message={errorMessage} />}
      </div>
    );
  }
}
