import React from 'react';

const PokemonDetail = ({ pokemon }) => {
  const {
    name,
    number,
    types,
    generation,
    about
  } = pokemon;
  return (
    <div>
      <div>{`# ${number}`}</div>
      <div>Name: {name}</div>
      <div>Generation: {generation}</div>
      <div>Types: {types.map((t, i) => <span key={i}>{t} </span>)}</div>
      <div>About: {about}</div>
    </div>
  );
};

export default PokemonDetail;
