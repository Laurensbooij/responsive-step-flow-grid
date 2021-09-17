// import original module declarations
import 'styled-components';

// and extend them
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
        primary: string;
        secondary: string;
        darkBlue: string;
        primaryText: string;
        grey1: string;
        grey2: string;
        grey3: string;
        grey4: string;
        white: string;
    };
    shadows: {
      dropShadow: string;
    };
    breakpoints: {
      tablet: string;
      desktop: string;
    };
  }
}