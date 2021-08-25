import { createTheme, Theme, ThemeOptions, withStyles } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import { amber, blue, red } from '@material-ui/core/colors';
import createPalette from '@material-ui/core/styles/createPalette';
import { lime } from '@material-ui/core/colors';
import { Button, ButtonProps } from '@material-ui/core';
import ButtonPropsVariantOverrides from '../src/types/createPalette'

// The button type for color via Button.d.ts only allows the following
// color?: OverridableStringUnion<
//   'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning',
//   ButtonPropsColorOverrides
// >;

// Theme with customized color palette options
export const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
    neutral: {
      main: blue[500],
    }
  },
});

// Base theme used for custom theme below
export const baseTheme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
    neutral: {          // Available via palette, but not buttons, see createPalette.d.ts
      main: blue[500],
    }
  },
});

// Modify theme from base theme
const createMytheme = (options: ThemeOptions) => {
  return createTheme({
    ...baseTheme,
    ...options  
  })
}

// Creating a landingPageTheme utilizing createPalette directly
export const landingPageTheme = createMytheme({palette: createPalette(
  {
    primary: {
      main: red[500],
    },
    secondary: {
      main: blue[500],
    }
  }
)});

// Create a shoppingCardPallete to be utilized in shoppingCartTheme
const shoppingCartPallete = createPalette(
  {
    primary: {
      main: amber[500],
    },
    secondary: {
      main: lime[500],
    }
  }
);

// Createing a shopping card theme
export const shoppingCartTheme = createMytheme({palette: shoppingCartPallete});
