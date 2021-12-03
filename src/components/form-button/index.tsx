import React from 'react';
import { StyledButton } from './styled';
import { PuffLoader } from 'react-spinners';

interface Props {
  children: any;
  variant?: 'primary' | 'secondary';
  onClick: Function;
  loading: boolean;
}

const FormButton: React.FC<Props> = props => {
  const { variant, onClick, children, loading } = props;

  return (
    <StyledButton variant={variant} onClick={() => onClick()} disabled={loading}>
      <PuffLoader loading={loading} color="white" size={20} />
      {children}
    </StyledButton>
  );
};

export default FormButton;
