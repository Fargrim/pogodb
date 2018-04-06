import React from 'react';
import './PokemonLink.css';
import { Link } from 'react-router-dom';

export const PokemonLink = ({
  number,
  onClick,
  name,
  color
}) => {
  return (
      <Link className={`pokemon-link ${color}`} to={`/pokemon/${number}`}>{name}</Link>
  );
};

export default PokemonLink
