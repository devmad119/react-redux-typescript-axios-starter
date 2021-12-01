import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { TokenResponse } from 'common/types/auth-types';

const ACCESS_TOKEN = 'access_token';
const USER_HANDLE = 'user_handle';

const isTokenValid = (token: string) => {
  try {
    const decoded: { exp: number } = jwtDecode(token);
    return new Date(decoded.exp * 1000) > new Date();
  } catch {
    return false;
  }
};

const login = (payload: TokenResponse) => {
  Cookies.set(ACCESS_TOKEN, payload.api_token);
  Cookies.set(USER_HANDLE, payload.handle);
};

const logout = () => {
  Cookies.remove(ACCESS_TOKEN);
  Cookies.remove(USER_HANDLE);
};

const getToken = () => Cookies.get(ACCESS_TOKEN);

const getUserHandle = () => Cookies.get(USER_HANDLE);

const isAuthenticated = () => {
  const token = getToken();
  const userHandle = getUserHandle();
  if (!token || !userHandle) {
    return false;
  }
  return isTokenValid(token);
};

export default {
  login,
  logout,
  getToken,
  getUserHandle,
  isAuthenticated,
  isTokenValid,
};
