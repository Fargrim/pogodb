import React from 'react';
import pokemon from './pokemon.js';
import PokemonLink from './PokemonLink';

const PokemonSelectionContainer = ({pokemon}) => (
  <div className="pokemon-selection">
    {pokemon.map(
      (p, i) => (
        <PokemonLink
          key={p.number}
          color={(p.types && p.types[0]) || 'Unknown'}
          name={p.name} number={p.number}/>
      )
    )}
  </div>
);
export default PokemonSelectionContainer;
