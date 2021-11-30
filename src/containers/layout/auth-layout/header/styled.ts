import styled from 'styled-components';
import { heading } from 'styles/typography';
import theme from 'styles/theme';

export const StyledHeader = styled.header`
  background-color: ${theme.color.background.midnight};
  padding: 15px 55px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

export const LogoTitle = styled.h4`
  ${heading.h4.bold};
  margin-left: 10px;
  color: white;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  & > * {
    padding: 0 15px;
  }
  & > *:not(:last-child) {
    border-right: 1px solid ${theme.color.text.light};
  }

  a {
    position: relative;
    display: flex;
    flex-direction: column;
    font-weight: 500;
    color: white;
    ::after {
      transition: all 0.2s ease-in-out;
      content: '';
      height: 2px;
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
  }
`;
