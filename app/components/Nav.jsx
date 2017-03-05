import React from 'react';
import { Link, IndexLink } from 'react-router';

export default function () {
  const navStyle = {
    backgroundColor: '#ddd',
    fontSize: '1.1em',
    padding: '.8em',
  };

  const linkStyle = {
    color: '#3b8ad2',
    display: 'inline-block',
    padding: '0 .5em',
    textDecoration: 'none',
  };

  const activeLinkStyle = {
    color: '#000',
    fontWeight: 'bold',
  };

  return (
    <div style={navStyle}>
      <IndexLink to="/" style={linkStyle} activeStyle={activeLinkStyle}>Get weather</IndexLink>
      <Link to="/about" style={linkStyle} activeStyle={activeLinkStyle}>About</Link>
      <Link to="/examples" style={linkStyle} activeStyle={activeLinkStyle}>Examples</Link>
    </div>
  );
}
