export const pogoApp = (state, action) => {
  if (typeof state === 'undefined') {
    return state
  }
 
  // For now, don't handle any actions
  // and just return the state given to us.
  // TODO: There is probably a cleaner way to do all of this.
  if (action.type === 'SELECT_POKEMON') {
    if (state.selectedPokemon.length >= 6) return state;
    const newPokemon = state.pokemon.find(p => p.number === action.number);
    return Object.assign(
      {},
      state,
      {
        pokemon: state.pokemon.filter(p => p.number !== newPokemon.number),
        selectedPokemon: [...state.selectedPokemon, newPokemon]
      }
    );
  }
  if (action.type === 'DESELECT_POKEMON') {
    const pokemonToRemove = state.selectedPokemon.find(p => p.number === action.number);
    return Object.assign(
      {},
      state,
      {
        pokemon: [...state.pokemon, pokemonToRemove].sort((p1, p2) => p1.number - p2.number),
        selectedPokemon: state.selectedPokemon.filter(p => p.number !== pokemonToRemove.number)
      }
    )
  }
  return state
}
