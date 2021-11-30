export type CreateUser = {
  email: string;
  password: string;
  userName: string;
};

export type CheckAccount = {
  account: string;
  password: string;
};

export type TokenResponse = {
  api_token: string;
  handle: string;
};
