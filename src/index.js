import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { pogoApp } from './reducers';
import pokemon from './pokemon.js';

const store = createStore(pogoApp, {
  pokemon,
  selectedPokemon: []
});

const render = () => ReactDOM.render(
  <Provider store={store}>
    <App store={store}/>
  </Provider>,
  document.getElementById('root')
);
store.subscribe(render);
render();
registerServiceWorker();
