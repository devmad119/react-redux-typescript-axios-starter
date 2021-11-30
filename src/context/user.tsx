import { createContext, FC, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import auth from 'common/api/auth';
import { TokenResponse } from '/common/types/auth-types';

type State = {
  isAuthenticated: boolean;
  login: (payload: TokenResponse) => void;
  logout: () => void;
};

const UserContext = createContext<State>({
  isAuthenticated: false,
  login: () => ({}),
  logout: () => ({}),
});

const UserContextProvider: FC = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(auth.isAuthenticated());
  const history = useHistory();

  const login = (payload: TokenResponse) => {
    auth.login(payload);
    setAuthenticated(true);
    history.push('/');
  };

  const logout = () => {
    auth.logout();
    history.push('/signin');
  };

  return (
    <UserContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

export const useUserContext = () => {
  return useContext(UserContext);
};
