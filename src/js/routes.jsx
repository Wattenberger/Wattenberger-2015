import React from 'react/addons';
import Router from 'react-router';
import App from '../components/app.jsx';
import TodoApp from '../components/templates/todo-app/todo-app.jsx';
import About from '../components/templates/about/about.jsx';
import Thoughts from '../components/templates/thoughts/thoughts.jsx';
import Contact from '../components/templates/contact/contact.jsx';

const pages = [
  {name: "About", slug: "about", handler: About},
  {name: "Thoughts", slug: "thoughts", handler: Thoughts},
  {name: "Contact", slug: "contact", handler: Contact},
]

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
  <Route name='app' path='/' handler={App}>
    <DefaultRoute name='todo-app' handler={TodoApp} />
    {pages.map(page =>
      <Route name={page.slug} path={'/' + page.slug} handler={page.handler} />
    )}
    <NotFoundRoute handler={TodoApp} />
  </Route>
);

export default routes;
