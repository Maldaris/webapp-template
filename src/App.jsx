import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';

import store from './store';
import { theme, base } from './config';

import SplashPage from './components/SplashPage';

import './App.scss';

const rootElement = document.getElementById('root');

const App = props => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <div className="app-container">
          <SplashPage props={props} config={base} appElement={rootElement}>
            <div>Template Works!</div>
          </SplashPage>
        </div>
      </ThemeProvider>
    </ReduxProvider>
  );
};

ReactDOM.render(<App />, rootElement);

module.hot.accept();
