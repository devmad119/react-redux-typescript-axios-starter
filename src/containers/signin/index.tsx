import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'components/card';
import Input from 'components/input';
import Button from 'components/button';
import { Title, SubTitle, LinkText, StyledLink } from './styled';
import logoImg from 'assets/icons/logo.png';

const Signin: React.FC = () => {
  const [email, setEmail] = useState<string>('');

  const handleChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleClick = () => {};

  return (
    <Card>
      <img src={logoImg} width={100} height={100} alt="logo" />
      <Title>WELCOME</Title>
      <SubTitle>Sign in by entering the information below</SubTitle>
      <Input name="email" type="email" placeholder="Enter the Email" value={email} onChange={handleChange} />
      <Input name="password" type="password" placeholder="Enter the Password" value={email} onChange={handleChange} />
      <StyledLink to="/forgot-password">
        <LinkText>Forgot Password?</LinkText>
      </StyledLink>
      <Button variant="primary" onClick={handleClick}>
        Sign In
      </Button>
      <Link to="/signup">
        <LinkText>Don't have an account?</LinkText>
      </Link>
    </Card>
  );
};

export default Signin;
