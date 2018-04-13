export const selectPokemon = (number) => ({
  type: 'SELECT_POKEMON',
  number
});

export const deselectPokemon = (number) => ({
  type: 'DESELECT_POKEMON',
  number
});
