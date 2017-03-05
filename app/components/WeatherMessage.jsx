import React from 'react';

const containerStyle = {
  paddingTop: '1em',
  textAlign: 'center',
  width: '100%',
};

export default function (props) {
  return (
    <div style={containerStyle}>
      {props.message}
    </div>
  );
}
