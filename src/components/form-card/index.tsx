import React from 'react';
import { StyledCard } from './styled';

interface Props {
  children: any;
}

const FormCard: React.FC<Props> = props => {
  const { children } = props;
  return <StyledCard>{children}</StyledCard>;
};

export default FormCard;
