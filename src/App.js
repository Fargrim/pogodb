import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './Header';
import PokemonSelectionContainer from './PokemonSelectionContainer';
import PokemonDetailContainer from './PokemonDetailContainer';

class App extends Component {

  render() {
    const {
      pokemon,
      selectedPokemon
    } = this.props.store.getState();
    return (
      <div className="App">
        <Header selectedPokemon={selectedPokemon}/>
        <div className="App-body">
          <PokemonSelectionContainer pokemon={pokemon}/>
        </div>
      </div>
    );
  }
}

export default App;
