import { lazy } from 'react';

//lazy loading for all layouts and components
const AuthLayout = lazy(() => import('containers/layout/auth-layout'));
const SignIn = lazy(() => import('containers/signin'));
const SignUp = lazy(() => import('containers/signup'));
const Dashboard = lazy(() => import('containers/dashboard'));
// routes
export type RouteType = {
  path: string;
  exact: boolean;
  layout: any;
  component: any;
};

const routes: RouteType[] = [
  { path: '/signin', exact: true, layout: AuthLayout, component: SignIn },
  { path: '/signup', exact: true, layout: AuthLayout, component: SignUp },
  { path: '/dashboard', exact: true, layout: AuthLayout, component: Dashboard },
];

export default routes;
