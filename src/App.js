import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { Studio } from './components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
  }

  html,
  body {
    height: 100vh;
    overflow: hidden;
    width: 100vw;
  }
`;

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Studio />
  </Provider>
)

export default App;
