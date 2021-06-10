import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Markets from './pages/Markets.jsx';
import Home from './pages/home';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/Home"  component={Home} />
      <Route path="/Lojas"  component={Markets} />
      </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);
