import { lazy } from 'react';

//lazy loading for all layouts and components
const AuthLayout = lazy(() => import('containers/layout/auth-layout'));
const MainLayout = lazy(() => import('containers/layout/main-layout'));
const SignIn = lazy(() => import('containers/signin'));
const SignUp = lazy(() => import('containers/signup'));
const QuickSMS = lazy(() => import('containers/quick-sms'));
const AddFunds = lazy(() => import('containers/add-funds'));
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
  { path: '/quick-sms', exact: true, layout: MainLayout, component: QuickSMS },
  { path: '/add-funds', exact: true, layout: MainLayout, component: AddFunds },
];

export default routes;
