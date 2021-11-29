import { createGlobalStyle } from 'styled-components'
import { font } from 'styles/typography'
import theme from 'styles/theme'

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
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smooth: antialiased; /* stylelint-disable-line property-no-unknown */
  }

  body {
    font-size: 1.6rem;
    color: ${theme.color.text.midnight};
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  a {
    color: ${theme.color.text.link};
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
`

export default GlobalStyle
