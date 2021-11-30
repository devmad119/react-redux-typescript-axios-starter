import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Card from 'components/card';
import Input from 'components/input';
import Button from 'components/button';
import { Title, LinkText } from './styled';
import logoImg from 'assets/icons/logo.png';
import isEmpty from 'validation/is-empty';
import isEmail from 'validation/is-email';

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
  const [state, setState] = useState<State>(initialState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleClick = () => {
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
    if (state.password !== state.confirmPassword) {
      toast.warning('Please enter the correct passwod.');
      return;
    }
  };

  return (
    <>
      <Card>
        <img src={logoImg} width={100} height={100} alt="logo" />
        <Title>Please Sign Up in here!</Title>
        <Input name="userName" type="text" placeholder="Enter the UserName" value={state.userName} onChange={handleChange} />
        <Input name="email" type="email" placeholder="Enter the Email" value={state.email} onChange={handleChange} />
        <Input name="password" type="password" placeholder="Enter the Password" value={state.password} onChange={handleChange} />
        <Input name="confirmPassword" type="password" placeholder="Confirm the Password" value={state.confirmPassword} onChange={handleChange} />
        <Button variant="primary" onClick={handleClick}>
          Sign Up
        </Button>
        <Link to="/signin">
          <LinkText>Already have an account?</LinkText>
        </Link>
      </Card>
    </>
  );
};

export default SignUp;
