import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'components/card';
import Input from 'components/input';
import Button from 'components/button';
import { Title, LinkText } from './styled';
import logoImg from 'assets/icons/logo.png';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState<string>('');

  const handleChange = (e: any) => {
    setEmail(e.target.value);
  };

  return (
    <Card>
      <img src={logoImg} width={60} height={60} alt="logo" />
      <Title>Please Sign Up in here!</Title>
      <Input name="firstName" type="text" placeholder="Enter the First Name" value={email} onChange={handleChange} />
      <Input name="lastName" type="text" placeholder="Enter the Last Name" value={email} onChange={handleChange} />
      <Input name="email" type="email" placeholder="Enter the Email" value={email} onChange={handleChange} />
      <Input name="password" type="password" placeholder="Enter the Password" value={email} onChange={handleChange} />
      <Button variant="primary">Sign Up</Button>
      <Link to="/signin">
        <LinkText>Already have an account?</LinkText>
      </Link>
    </Card>
  );
};

export default SignUp;
