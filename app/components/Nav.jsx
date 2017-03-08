import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

export default class Nav extends Component {

  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather app</li>
            <li><IndexLink to="/" >Get weather</IndexLink></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/examples">Examples</Link></li>
          </ul>
        </div>

        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li><input type="search" placeholder="Search weather" /></li>
              <li><input type="submit" className="button" value="Get Weather" /></li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}
