import HttpApiService from './http-api-service';
import { config } from 'config';
import { CreateUser, CheckAccount } from 'common/types/auth-types';

const API_BASE = `${config.apiUrl}`;

class AuthApiService extends HttpApiService {
  constructor() {
    super(`${API_BASE}`);
  }

<<<<<<< HEAD
  public signUp = (userData: CreateUser) => {
    return this.create('/signup', userData);
  };

  public signIn = (accountData: CheckAccount) => {
    return this.post('/signin', accountData);
  };

  public signOut = () => {
=======
  signUp = (userData: CreateUser) => {
    return this.create('/signup', userData);
  };

  signIn = (accountData: CheckAccount) => {
    return this.post('/signin', accountData);
  };

  signOut = () => {
>>>>>>> 5e15841be91b42d6463e692a2fe206784607cad4
    return this.get('/signout');
  };
}

export default AuthApiService;
