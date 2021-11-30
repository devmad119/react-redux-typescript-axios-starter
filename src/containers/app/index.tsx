import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import GlobalStyles from 'styles/global';
import routes, { RouteType } from 'app/routes';
import UserContextProvider, { useUserContext } from 'context/user';
import Toastr from 'components/toastr';

const App = () => {
  const { isAuthenticated } = useUserContext();

  return (
    <>
      <GlobalStyles />
      <UserContextProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              {isAuthenticated ? <Redirect to="/dashboard" /> : <Redirect to="/signin" />}
            </Route>
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
        <Toastr />
      </UserContextProvider>
    </>
  );
};

export default App;
