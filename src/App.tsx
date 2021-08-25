import * as React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';
import { Button, styled, ThemeProvider } from '@material-ui/core';
import { landingPageTheme, shoppingCartTheme, theme } from './theme';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

// I'd probably prefix name by feature then color type per material ui
// MyfeaturePrimarycolorButton
// CartPrimaryButton
// LandingSecondaryButton
// Here we called it styled button to demostrate:
const StyledButton = styled(Button)`
  background-color: #0288d1;
  color: black;
`;

export default function App() {
  return (
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Create React App v5-beta example with styled-components and TypeScript
          </Typography>
          <ProTip />
          <Copyright />

          <ThemeProvider theme={theme}>
            <Button variant="contained" color="primary">
              Primary Button For theme
            </Button>
          </ThemeProvider>

          <ThemeProvider theme={landingPageTheme}>
            <Button variant="contained" color="secondary">
              Primary Button FOr landingPageTheme
            </Button>
          </ThemeProvider>

          <ThemeProvider theme={shoppingCartTheme}>
            <Button variant="contained" color="secondary">
              Primary Button FOr landingPageTheme
            </Button>
          </ThemeProvider>

          <StyledButton>
            Custom Style Button Style
          </StyledButton>

        </Box>
      </Container>

  );
}
