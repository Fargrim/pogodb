import React from 'react';
import PokemonLink from './PokemonLink';
import { selectPokemon } from './actions';
import { connect } from 'react-redux';
import './PokemonSelectionContainer.css';

const mapStateToProps = state => ({
  pokemon: state.pokemon
});

const mapDispatchtoProps = dispatch => ({
  selectPokemon: number => {
    dispatch(selectPokemon(number))
  }
});

const PokemonSelectionContainer = ({ pokemon, selectPokemon }) => (
  <div className="pokemon-selection">
    {pokemon.map(
      p => (
        <PokemonLink
          key={p.number}
          color={(p.types && p.types[0]) || 'Unknown'}
          name={p.name}
          number={p.number}
          action={selectPokemon}
        />
      )
    )}
  </div>
);
export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(PokemonSelectionContainer);
