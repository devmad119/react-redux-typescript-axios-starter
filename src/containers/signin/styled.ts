import styled from 'styled-components';
import { heading } from 'styles/typography';
import theme from 'styles/theme';
import { Link } from 'react-router-dom';

export const Title = styled.h4`
  ${heading.h5.regular};
  margin-top: 30px;
`;

export const SubTitle = styled.span`
  color: ${theme.color.text.light};
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const LinkText = styled.span`
  color: ${theme.color.text.light};
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: small;
  display: flex;
  flex-direction: column;

  ::after {
    transition: all 0.2s ease-in-out;
    content: '';
    height: 1px;
    background-color: white;
    width: 100%;
    left: 0;
    bottom: -5px;
    transform: scaleX(0);
  }
  :hover {
    color: #c0c0c0;
    ::after {
      transform: scaleX(1);
    }
  }
`;

export const StyledLink = styled(Link)`
  align-self: flex-end;
`;
