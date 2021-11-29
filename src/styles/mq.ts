export enum ScreenSize {
  SM = 375,
  MD = 768,
  LG = 1180,
}

const mq = {
  small: `@media (min-width: ${ScreenSize.SM / 16}em)`,
  medium: `@media (min-width: ${ScreenSize.MD / 16}em)`,
  large: `@media (min-width: ${ScreenSize.LG / 16}em)`,
}

export default mq
