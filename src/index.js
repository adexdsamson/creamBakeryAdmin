import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import configureStore from './store';

const Store = configureStore();

// Save a reference to the root element for reuse
const rootEl = document.getElementById("root");

// Create a reusable render method that we can call more than once
let render = () => {
  // Dynamically import our main App component, and render it
  const App = require("./App").default;
  
  ReactDOM.render(
      <Provider store={Store}>
          <App />
      </Provider>,
      rootEl
  );
};
  
if(module.hot) {
  // Support hot reloading of components
  // and display an overlay for runtime errors
  const renderApp = render;
  const renderError = (error) => {
    const RedBox = require("redbox-react").default;
    ReactDOM.render(
      <RedBox error={error} />,
      rootEl,
    );
  };
  render = () => {
    try {
      renderApp();
    }
    catch(error) {
      console.error(error);
      renderError(error);
    }
  };
   // Whenever the App component file or one of its dependencies
    // is changed, re-import the updated component and re-render it
    module.hot.accept("./App", () => {
      setTimeout(render);
  });
}

render();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
