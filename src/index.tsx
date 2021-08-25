import * as React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.Fragment>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <App />
    </React.Fragment>,
  </ThemeProvider>,
  document.querySelector('#root'),
);
