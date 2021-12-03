import styled from 'styled-components';
import theme from 'styles/theme';

export const MainSection = styled.div`
  width: -webkit-fill-available;
`;

export const ContentSection = styled.div`
  overflow: auto;
  height: calc(100vh - 70px);
`;

export const StyledMainLayout = styled.div`
  display: flex;
  background-color: ${theme.color.background.main};
`;
