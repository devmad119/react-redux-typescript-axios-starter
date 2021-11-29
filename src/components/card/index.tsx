import React from 'react';
import { StyledCard } from './styled';

interface Props {
  children: React.ReactChild[];
}

const Card: React.FC<Props> = props => {
  const { children } = props;
  return <StyledCard>{children}</StyledCard>;
};

export default Card;
