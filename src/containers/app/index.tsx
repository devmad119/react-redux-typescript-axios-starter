import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import GlobalStyles from 'styles/global';
import routes, { RouteType } from 'app/routes';
import Toastr from 'components/toastr';
import Loading from 'components/loading';
import { selectIsAuthenticated } from 'features/auth-slice';
import useAppSelector from 'hooks/use-app-seletecor';
import authApi from 'common/api/auth';
import { setCurrentUser } from 'features/auth-slice';
import useAppDispatch from 'hooks/use-app-dispatch';
import isEmpty from 'validation/is-empty';

const Error404 = React.lazy(() => import('containers/404'));

const App: React.FC = () => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const dispatch = useAppDispatch();

  const signOut = () => {
    dispatch(setCurrentUser({}));
    authApi.logout();
  };

  useEffect(() => {
    const token: string = authApi.getToken() as string;
    if (!isEmpty(token)) {
      if (!authApi.isTokenValid(token)) signOut();
    } else signOut();
  }, []);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <GlobalStyles />
        <Router>
          <Switch>
            <Route exact path="/">
              {isAuthenticated ? <Redirect to="/quick-sms" /> : <Redirect to="/signin" />}
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
            <Route path="*" component={Error404} />
          </Switch>
        </Router>
        <Toastr />
      </Suspense>
    </>
  );
};

export default App;
