import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './theme';

import './index.css';
import { store } from './store/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  
    <React.StrictMode>
      <ThemeProvider theme={theme}>
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
        </Router>
      </ThemeProvider>
    </React.StrictMode >,
  document.getElementById('root')
);