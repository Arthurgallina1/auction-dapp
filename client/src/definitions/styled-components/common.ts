// #region Global Imports
import { BaseTheme } from 'styled-components/macro'
// #endregion Global Imports

const common: BaseTheme = {
  colors: {
    transparent: 'transparent',
    darkGrey: '#282C34',
    blackGrey: '#20232A',
    white: '#FFFFFF',
    primary: '#0543ec',
    secondary: '##F7C42D',
    black: '#242424',
    grey: '#6F6F6F',
  },
  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '5.2rem',
    },
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out',
  },
  shadow: {
    default: ' 0px 0px 25px rgba(0, 0, 0, 0.1);',
  },
  border: {
    radius: '0.4rem',
  },
}

export { common }
