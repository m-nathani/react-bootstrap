import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'redux-store';
import Routes from 'routes';
import { ViewportContextProvider } from 'contexts/viewport';
import useSetViewportHeightCSS from 'hooks/useSetViewportHeightCSS';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';
import { AlertContainer } from './utils/alerts';
import 'styles/main.scss';

function App() {
  useSetViewportHeightCSS();

  return (
    <React.StrictMode>
      <Provider store={store}>
        <AlertContainer />
        <ViewportContextProvider>
          <Routes />
        </ViewportContextProvider>
      </Provider>
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export default App;
