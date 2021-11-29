import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyles from 'styles/global';
import routes, { RouteType } from 'app/routes';

const App = () => (
  <>
    <GlobalStyles />
    <Router>
      <Switch>
        {routes.map((route: RouteType, index: number) => {
          return (
            <Route path={route.path} exact={route.exact} key={index}>
              <route.layout>
                <route.component />
              </route.layout>
            </Route>
          );
        })}
      </Switch>
    </Router>
  </>
);

export default App;
