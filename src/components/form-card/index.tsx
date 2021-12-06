import React from 'react';
import { StyledCard } from './styled';

interface Props {
  children: any;
  onKeyDown: Function;
}

const FormCard: React.FC<Props> = props => {
  const { children, onKeyDown } = props;
  return <StyledCard onKeyDown={e => onKeyDown(e)}>{children}</StyledCard>;
};

export default FormCard;
