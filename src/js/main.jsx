import React from 'react/addons';
import {Router} from 'react-router'
import routes from "./routes"
import App from '../components/app.jsx';

React.render((
  <Router>
    {routes}
  </Router>
), document.getElementById('content'))