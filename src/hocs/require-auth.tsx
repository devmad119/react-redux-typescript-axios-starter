import { ComponentType } from 'react';
import { Redirect } from 'react-router-dom';
import { selectIsAuthenticated } from 'features/auth-slice';
import useAppSelector from 'hooks/use-app-seletecor';
import authApi from 'common/api/auth';

const requireAuth =
  <Props extends {}>(BaseComponent: ComponentType<Props>) =>
    (props: Props) => {
      const isAuthenticated = useAppSelector(selectIsAuthenticated);

      if (!isAuthenticated) {
        authApi.logout();
        return <Redirect to="/signin"/>;
      }

      return <BaseComponent {...props} />;
    };

export default requireAuth;
