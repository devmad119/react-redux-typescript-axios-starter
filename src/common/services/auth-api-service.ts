import HttpApiService from './http-api-service';
import { config } from 'config';
import { CreateUser, CheckAccount } from 'common/types/auth-types';

const API_BASE = `${config.apiUrl}`;

class AuthApiService extends HttpApiService {
  constructor() {
    super(`${API_BASE}`);
  }

  signUp = (userData: CreateUser) => {
    return this.create('/signup', userData);
  };

  signIn = (accountData: CheckAccount) => {
    return this.post('/signin', accountData);
  };

  signOut = () => {
    return this.get('/signout');
  };
}

export default AuthApiService;
