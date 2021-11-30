import { ComponentType } from 'react';
import { useUserContext } from 'context/user';

const requireAuth =
  <Props extends {}>(BaseComponent: ComponentType<Props>) =>
  (props: Props) => {
    const { isAuthenticated, logout } = useUserContext();

    if (!isAuthenticated) {
      logout();
      return null;
    }

    return <BaseComponent {...props} />;
  };

export default requireAuth;
