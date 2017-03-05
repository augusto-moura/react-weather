import React from 'react';

const containerStyle = {
  paddingTop: '1em',
  textAlign: 'center',
  width: '100%',
};

export default function (props) {
  const { temp, location } = props;

  return (
    <div style={containerStyle}>
      It&apos;s {temp}°C in {location}.
    </div>
  );
}
