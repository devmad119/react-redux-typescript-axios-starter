import React from 'react';
import { StyledButton } from './styled';

interface Props {
  children: React.ReactChild;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<Props> = props => {
  const { variant, children } = props;
  return <StyledButton variant={variant}>{children}</StyledButton>;
};

export default Button;
