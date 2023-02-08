import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NotFoundPage } from '../views';

// setup browser router for url routing
const Routes: React.FC<any> = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="*" component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
