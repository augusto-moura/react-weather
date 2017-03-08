import React from 'react';

export default function WeatherMessage({ temp, location }) {
  return (
    <div className="text-center">
      It&apos;s {temp}°C in {location}.
    </div>
  );
}
