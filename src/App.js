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
        <Header />
        <div className="App-body">
          <Route exact path="/" component={PokemonSelectionContainer}/>
          <Route path="/pokemon/:number" component={PokemonDetailContainer}/>
        </div>
      </div>
    );
  }
}

export default App;
