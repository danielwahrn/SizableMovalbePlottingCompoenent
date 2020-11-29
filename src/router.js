import React from "react";
import { Route, Switch } from "react-router-dom";

import FirstPage from './container/FirstPage';

export default function MainRoutes() {
  return (
    
        <Switch>
          <Route exact path="/" component={FirstPage} />
        </Switch>
      
  );
}