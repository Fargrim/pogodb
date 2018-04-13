import React from 'react';
import './PokemonLink.css';

export const PokemonLink = ({
  number,
  action,
  name,
  color
}) => {
  return (
      <div
        className={`pokemon-link ${color}`}
        to={`/pokemon/${number}`}
        onClick={() => action(number)}
      >
        <img src={require(`./images/${number}.png`)} alt={name}/>
      </div>
  );
};

export default PokemonLink;
