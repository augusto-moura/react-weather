import React from 'react';
import { Link } from 'react-router';

export function searchLocationLink(location) {
  return {
    pathname: '/',
    query: { location },
  };
}

export default function ShowExamples() {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li><Link to={searchLocationLink('Goiania')}>Goiânia, BR</Link></li>
        <li><Link to={searchLocationLink('Moscou')}>Moscou, RU</Link></li>
      </ol>
    </div>
  );
}
