import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import App from './App';
import Login from './Login';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App}/>
        <Route path="/:boxId" component={App}/>
        <Route path="/login" component={Login}/>
      </div>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
