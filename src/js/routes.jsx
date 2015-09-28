import React from 'react/addons';
import {Route, IndexRoute} from 'react-router'
import App from '../components/app.jsx';
import About from './../components/templates/about/about.jsx';
import Thoughts from './../components/templates/thoughts/thoughts.jsx';
import Contact from './../components/templates/contact/contact.jsx';

const pages = [
  {name: "About", slug: "about", component: About},
  {name: "Thoughts", slug: "thoughts", component: Thoughts},
  {name: "Contact", slug: "contact", component: Contact},
]

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={About} />
    {pages.map((page, idx) =>
      <Route path={page.slug + "/"} component={page.component} key={idx} />
    )}
  </Route>
);

export default routes;
