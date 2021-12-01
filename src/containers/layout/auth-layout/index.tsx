import React from 'react';
import Header from './header';
import Footer from './footer';
import { AuthSection } from './styled';

interface Props {
  children: any;
}

const AuthLayout: React.FC<Props> = props => {
  const { children } = props;

  return (
    <>
      <Header />
      <AuthSection>{children}</AuthSection>
      <Footer />
    </>
  );
};

export default AuthLayout;
