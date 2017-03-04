import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import Main from './components/Main';
import ShowWeather from './components/ShowWeather';
import ShowAbout from './components/ShowAbout';
import ShowExamples from './components/ShowExamples';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main} >
      <IndexRoute component={ShowWeather} />
      <Route path="about" component={ShowAbout} />
      <Route path="examples" component={ShowExamples} />
    </Route>
  </Router>,
  document.getElementById('app'),
);
