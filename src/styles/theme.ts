import { RGB } from 'common/types'

const theme = {
  color: {
    text: {
      white: '#FFF',
      light: '#999CAD',
      muted: 'rgb(248 249 254 / 50%)',
      link: '#0D8FE6',
      midnight: '#202A5A',
      danger: '#e51169',
    },
    background: {
      dark: '#20295A',
      light: '#E9EFF4',
      white: '#FFF',
    },
    border: {
      light: '#E8E6EA',
    },
    gradient: {
      scale: [
        [3, 1, 140],
        [0, 121, 234],
        [158, 194, 255],
      ] as RGB[],
    },
  },
  ease: {
    in: 'cubic-bezier(.55,.06,.68,.19)',
    out: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
    inOut: 'cubic-bezier(.46,.03,.52,.96)',
  },
}

export default theme
