import styled from 'styled-components';
import theme from 'styles/theme';

export const StyledHeader = styled.header`
  background-color: ${theme.color.background.light};
  padding: 15px 55px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 1;
  width: 100%;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  & > * {
    padding: 0 15px;
  }

  a {
    position: relative;
    display: flex;
    flex-direction: column;
    font-weight: 500;
    color: white;

    :hover {
      color: #c0c0c0;
      ::after {
        transform: scaleX(1);
      }
    }

    img {
      border-radius: 100%;
    }
  }
`;
