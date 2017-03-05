import React from 'react';
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

export default function () {
  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Get Weather</h1>
      <WeatherForm />
      <WeatherMessage message="It's 26°C in Goiânia" />
    </div>
  );
}
