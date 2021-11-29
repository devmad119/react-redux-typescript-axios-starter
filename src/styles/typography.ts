import { css } from 'styled-components'

export const font = {
  base: '"Gilroy", sans-serif',
}

export const heading = {
  h1: {
    bold: css`
      font-size: 4.2rem;
      font-weight: 700;
    `,
  },
  h2: {
    semiBold: css`
      font-size: 3.4rem;
      font-weight: 600;
    `,
    light: css`
      font-size: 3.4rem;
      font-weight: 300;
    `,
  },
  h3: {
    regular: css`
      font-size: 2.4rem;
      font-weight: 400;
    `,
    medium: css`
      font-size: 2.4rem;
      font-weight: 500;
    `,
    bold: css`
      font-size: 2.4rem;
      font-weight: 700;
    `,
  },
  h4: {
    bold: css`
      font-size: 2.2rem;
      font-weight: 700;
    `,
  },
  h5: {
    bold: css`
      font-size: 2rem;
      font-weight: 700;
    `,
    regular: css`
      font-size: 2rem;
      font-weight: 400;
    `,
  },
}

export const paragraph = {
  large: {
    bold: css`
      font-size: 1.6rem;
      font-weight: 700;
    `,
    medium: css`
      font-size: 1.6rem;
      font-weight: 500;
    `,
    regular: css`
      font-size: 1.6rem;
      font-weight: 400;
    `,
  },
  small: {
    bold: css`
      font-size: 1.4rem;
      font-weight: 700;
    `,
    medium: css`
      font-size: 1.4rem;
      font-weight: 500;
    `,
    regular: css`
      font-size: 1.4rem;
      font-weight: 400;
    `,
  },
  smaller: {
    bold: css`
      font-size: 1.2rem;
      font-weight: 700;
    `,
    medium: css`
      font-size: 1.2rem;
      font-weight: 500;
    `,
    regular: css`
      font-size: 1.2rem;
      font-weight: 400;
    `,
  },
}
