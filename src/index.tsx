import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import * as serviceWorker from './serviceWorker';
import { GlobalStyle } from './globalStyles';

ReactDOM.render(
  <>
    {/* Global styles are placed outside strict mode for now because otherwise
    the styles will be put in the stylesheet twice; annoyinggg
    https://github.com/styled-components/styled-components/issues/3076 */}
    <GlobalStyle />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
