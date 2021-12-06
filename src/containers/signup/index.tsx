import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import FormCard from 'components/form-card';
import FormInput from 'components/form-input';
import FormButton from 'components/form-button';
import { Title, LinkText } from './styled';
import logoImg from 'assets/icons/logo.png';
import isEmpty from 'validation/is-empty';
import isEmail from 'validation/is-email';
import AuthApiService from 'common/services/auth-api-service';
import { CreateUser } from 'common/types/auth-types';

interface State {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const initialState: State = {
  userName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUp: React.FC = () => {
  const authApiService = new AuthApiService();

  const [loading, setLoading] = useState<boolean>(false);
  const [state, setState] = useState<State>(initialState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = async () => {
    if (isEmpty(state.userName)) {
      toast.warning('Please fill the username.');
      return;
    }
    if (isEmpty(state.email)) {
      toast.warning('Please fill the email.');
      return;
    }
    if (!isEmail(state.email)) {
      toast.warning('Please enter the valid email.');
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
    if (state.password !== state.confirmPassword) {
      toast.warning('Please enter the correct password.');
      return;
    }

    const userData: CreateUser = {
      email: state.email,
      password: state.password,
      userName: state.userName,
    };

    try {
      setLoading(true);
      const res = await authApiService.signUp(userData);
      setLoading(false);
      if (res.data) toast.success(res.data.message);
    } catch (error) {
      setLoading(false);
      toast.error(error as string);
    }
  };

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <>
      <FormCard onKeyDown={handleKeyDown}>
        <img src={logoImg} width={100} height={100} alt="logo" />
        <Title>Please Sign Up in here!</Title>
        <FormInput name="userName" type="text" placeholder="Enter the UserName" value={state.userName} onChange={handleChange} />
        <FormInput name="email" type="email" placeholder="Enter the Email" value={state.email} onChange={handleChange} />
        <FormInput name="password" type="password" placeholder="Enter the Password" value={state.password} onChange={handleChange} />
        <FormInput name="confirmPassword" type="password" placeholder="Confirm the Password" value={state.confirmPassword} onChange={handleChange} />
        <FormButton variant="primary" onClick={handleSubmit} loading={loading}>
          Sign Up
        </FormButton>
        <Link to="/signin">
          <LinkText>Already have an account?</LinkText>
        </Link>
      </FormCard>
    </>
  );
};

export default SignUp;
