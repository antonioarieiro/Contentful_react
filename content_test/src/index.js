import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Markets from './pages/Markets.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/Lojas" component={Markets} />
      </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);
