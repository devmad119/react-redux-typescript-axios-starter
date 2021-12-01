import React from 'react';
import { StyledContent } from './styled';

interface Props {
  children: any;
}

const Content: React.FC<Props> = props => {
  const { children } = props;

  return <StyledContent>{children}</StyledContent>;
};

export default Content;
