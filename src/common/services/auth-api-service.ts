import HttpApiService from './http-api-service';
import { config } from 'config';
import { CreateUser, CheckAccount } from 'common/types/auth-types';

const API_BASE = `${config.apiUrl}`;

export class AuthApiService extends HttpApiService {
  constructor() {
    super(`${API_BASE}`);
  }

  signUp = (userData: CreateUser) => {
    return this.create('/signup', userData);
  };

  signIn = (accountData: CheckAccount) => {
    return this.post('/signin', accountData);
  };
}

export const authApiService = new AuthApiService();
