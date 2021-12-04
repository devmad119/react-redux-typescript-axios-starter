import { createGlobalStyle } from 'styled-components';
import { font } from 'styles/typography';
import theme from 'styles/theme';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 62.5%;
    font-family: ${font.base};
    text-rendering: optimizeLegibility;
  }

  body {
    font-size: 1.6rem;
    color: ${theme.color.text.white};
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0 0 0 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  ul,
  ol {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  input, button {
    font-family: ${font.base};
  }

  #root {
    height: 100%;
    display: flex;
    flex-direction: column;

    > * {
      flex-shrink: 0;
    }
  }
`;

export default GlobalStyle;
