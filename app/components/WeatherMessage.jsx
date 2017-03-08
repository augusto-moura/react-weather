import React from 'react';

export default function WeatherMessage({temp, location}) {
  return (
    <div>
      It&apos;s {temp}°C in {location}.
    </div>
  );
}
