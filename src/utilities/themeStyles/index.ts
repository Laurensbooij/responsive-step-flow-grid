import { DefaultTheme } from 'styled-components';

const themeStyles: DefaultTheme = {
  colors: {
    primary: '#547ECD',
    secondary: '#FFC238',
    darkBlue: '#193C7D',
    primaryText: '#203040',
    grey1: '#516171',
    grey2: '#EDF2F6',
    grey3: '#F8F8F8',
    grey4: '#FAFCFE',
    white: '#fff',
  },
  shadows: {
    dropShadow: '0 0 20px 0 rgba(61, 61, 61, 0.2)',
  },
  breakpoints: {
    tablet: '768px',
    desktop: '1280px',
  },
};

export default themeStyles;