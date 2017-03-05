import React from 'react';
import { Link, IndexLink } from 'react-router';

const navStyle = {
  backgroundColor: '#ddd',
  fontSize: '1.1em',
  padding: '.8em',
  width: '100%',
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

export default function () {
  return (
    <div style={navStyle}>
      <IndexLink to="/" style={linkStyle} activeStyle={activeLinkStyle}>Get weather</IndexLink>
      <Link to="/about" style={linkStyle} activeStyle={activeLinkStyle}>About</Link>
      <Link to="/examples" style={linkStyle} activeStyle={activeLinkStyle}>Examples</Link>
    </div>
  );
}
