import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved
import 'style!css!foundation-sites/dist/foundation.min.css';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved
import 'style!css!./styles/app.css';

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
