import React from 'react';
import { connect } from 'react-redux';
import './PokemonLink.css';
import { selectPokemon } from './actions';

export const PokemonLink = ({
  number,
  onPokemonClick,
  name,
  color
}) => {

  return (
      <div
        className={`pokemon-link ${color}`}
        to={`/pokemon/${number}`}
        onClick={() => onPokemonClick(number)}
      >
        <img src={require(`./images/${number}.png`)}/>
      </div>
  );
};

export default connect(
  state => state,
  dispatch => ({
    onPokemonClick: number => {
      dispatch(selectPokemon(number))
    }
  })
)(PokemonLink)
