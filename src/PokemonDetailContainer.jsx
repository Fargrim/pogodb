import React from 'react';
import pokemon from './pokemon.js';
import PokemonDetail from './PokemonDetail';
import './PokemonSelectionContainer.css';

const PokemonDetailContainer = ({match}) => {
  // TODO: Server or REST call here instead.
  const selectedPokemon = pokemon.find(p => p.number === match.params.number);
  return <PokemonDetail pokemon={selectedPokemon}/>;
};

export default PokemonDetailContainer;
