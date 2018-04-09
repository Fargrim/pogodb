import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './Header';
import PokemonSelectionContainer from './PokemonSelectionContainer';
import PokemonDetailContainer from './PokemonDetailContainer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header selectedPokemon={this.props.store.getState().selectedPokemon}/>
        <div className="App-body">
          <PokemonSelectionContainer/>
        </div>
      </div>
    );
  }
}

export default App;
