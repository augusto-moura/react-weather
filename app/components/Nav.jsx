import React from 'react';
import { Link } from 'react-router';

export default function () {
  return (
    <div>
      <h2>Nav component</h2>
      <Link to="/">Get weather</Link>
      <Link to="/about">About</Link>
      <Link to="/examples">Examples</Link>
    </div>
  );
}
