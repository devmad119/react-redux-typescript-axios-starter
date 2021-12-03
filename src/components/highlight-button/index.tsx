import React from 'react';
import { StyledButton } from './styled';
import { PuffLoader } from 'react-spinners';

interface Props {
  children: any;
  onClick: Function;
  loading: boolean;
}

const HighlightButton: React.FC<Props> = props => {
  const { onClick, children, loading } = props;

  return (
    <StyledButton onClick={() => onClick()} disabled={loading}>
      <PuffLoader loading={loading} color="white" size={20} />
      {!loading && children}
    </StyledButton>
  );
};

export default HighlightButton;
