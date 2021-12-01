import styled from 'styled-components';
import theme from 'styles/theme';

export const StyledFooter = styled.footer`
  background-color: ${theme.color.background.light};
  padding: 15px 55px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  z-index: 1;

  span {
    font-size: 15px;
    color: ${theme.color.text.light};
  }
`;
