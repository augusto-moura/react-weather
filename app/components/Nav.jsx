import React from 'react';
import { Link, IndexLink } from 'react-router';

export default function Nav() {
  return (
    <div>
      <IndexLink to="/" >Get weather</IndexLink>
      <Link to="/about">About</Link>
      <Link to="/examples">Examples</Link>
    </div>
  );
}
