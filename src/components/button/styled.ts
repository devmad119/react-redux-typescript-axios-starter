import styled from 'styled-components';
import theme from 'styles/theme';

interface Props {
  variant?: string;
}

export const StyledButton = styled.button<Props>`
  border: none;
  margin: 10px 0;
  padding: 8px 16px;
  color: white;
  width: 100%;
  background: ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return theme.color.button.primary;
      case 'secondary':
        return theme.color.button.secondary;
      default:
        return theme.color.button.primary;
    }
  }};
  line-height: 1.5;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  :disabled {
    opacity: 0.65;
  }
  :hover {
    margin: 7px 0 13px 0;
  }
`;
