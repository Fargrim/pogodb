import React from 'react';
import './App.css';
import Header from './Header';
import PokemonSelectionContainer from './PokemonSelectionContainer';

const App = () => (
  <div className="App">
    <Header />
    <div className="App-body">
      <PokemonSelectionContainer />
    </div>
  </div>
);

export default App;
