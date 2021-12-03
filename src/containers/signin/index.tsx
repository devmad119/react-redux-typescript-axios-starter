import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import FormCard from 'components/form-card';
import FormInput from 'components/form-input';
import FormButton from 'components/form-button';
import { Title, SubTitle, LinkText, StyledLink } from './styled';
import logoImg from 'assets/icons/logo.png';
import isEmpty from 'validation/is-empty';
import AuthApiService from 'common/services/auth-api-service';
import { CheckAccount } from 'common/types/auth-types';
import { TokenResponse } from 'common/types/auth-types';
import { setCurrentUser } from 'features/auth-slice';
import useAppDispatch from 'hooks/use-app-dispatch';
import { CurrentUser } from 'common/types/auth-types';
import authApi from 'common/api/auth';

interface State {
  account: string;
  password: string;
}

const initialState: State = {
  account: '',
  password: '',
};

const SignIn: React.FC = () => {
  const authApiService = new AuthApiService();

  const [loading, setLoading] = useState<boolean>(false);
  const [state, setState] = useState<State>(initialState);
  const dispatch = useAppDispatch();
  const history = useHistory();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleClick = async () => {
    if (isEmpty(state.account)) {
      toast.warning('Please enter the email or username.');
      return;
    }
    if (isEmpty(state.password)) {
      toast.warning('Please fill the password.');
      return;
    }
    if (state.password.length < 6) {
      toast.warning('Password must be longer than 6 characters.');
      return;
    }

    const userData: CheckAccount = {
      account: state.account,
      password: state.password,
    };

    try {
      setLoading(true);
      const res = await authApiService.signIn(userData);
      setLoading(false);
      if (res.data) {
        const tokenResponse: TokenResponse = {
          api_token: res.data.token,
          handle: res.data.data.userName,
        };
        const currentUser: CurrentUser = {
          _id: res.data.data._id,
          email: res.data.data.email,
          userName: res.data.data.userName,
        };
        await dispatch(setCurrentUser(currentUser));
        await authApi.login(tokenResponse);
        history.push('/');
        toast.success(res.data.message);
      } else {
        toast.error('Something went wrong.');
      }
    } catch (error) {
      setLoading(false);
      toast.error(error as string);
    }
  };

  return (
    <FormCard>
      <img src={logoImg} width={100} height={100} alt="logo" />
      <Title>WELCOME</Title>
      <SubTitle>Sign in by entering the information below</SubTitle>
      <FormInput name="account" type="text" placeholder="Enter the Email or UserName" value={state.account} onChange={handleChange} />
      <FormInput name="password" type="password" placeholder="Enter the Password" value={state.password} onChange={handleChange} />
      <StyledLink to="/forgot-password">
        <LinkText>Forgot Password?</LinkText>
      </StyledLink>
      <FormButton variant="primary" onClick={handleClick} loading={loading}>
        Sign In
      </FormButton>
      <Link to="/signup">
        <LinkText>Don't have an account?</LinkText>
      </Link>
    </FormCard>
  );
};

export default SignIn;
