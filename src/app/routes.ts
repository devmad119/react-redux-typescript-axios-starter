// layouts
import AuthLayout from 'containers/layout/auth-layout';

// components
import Signin from 'containers/signin';
import SignUp from 'containers/signup';

// routes
export type RouteType = {
  path: string;
  exact: boolean;
  layout: any;
  component: any;
};

const routes: RouteType[] = [
  { path: '/signin', exact: true, layout: AuthLayout, component: Signin },
  { path: '/signup', exact: true, layout: AuthLayout, component: SignUp },
];

export default routes;
