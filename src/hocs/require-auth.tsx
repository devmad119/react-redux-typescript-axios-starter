import { ComponentType } from 'react';
import { useHistory } from 'react-router-dom';
import { selectIsAuthenticated } from 'features/auth-slice';
import useAppSelector from 'hooks/use-app-seletecor';
import authApi from 'common/api/auth';

const requireAuth =
  <Props extends {}>(BaseComponent: ComponentType<Props>) =>
    (props: Props) => {
      const isAuthenticated = useAppSelector(selectIsAuthenticated);
      const history = useHistory();

      if (!isAuthenticated) {
        authApi.logout();
        history.push('/signin');
        return null;
      }

      return <BaseComponent {...props} />;
    };

export default requireAuth;
