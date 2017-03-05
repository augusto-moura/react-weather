import React from 'react';
import WeatherForm from './WeatherForm';

const containerStyle = {
  width: '30em',
  maxWidth: '100%',
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
    </div>
  );
}
