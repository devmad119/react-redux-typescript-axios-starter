import React from 'react';
import { StyledButton } from './styled';

interface Props {
  children: React.ReactChild;
  variant?: 'primary' | 'secondary';
  onClick: Function;
}

const Button: React.FC<Props> = props => {
  const { variant, onClick, children } = props;

  return (
    <StyledButton variant={variant} onClick={() => onClick()}>
      {children}
    </StyledButton>
  );
};

export default Button;
