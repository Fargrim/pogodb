export const pogoApp = (state, action) => {
  if (typeof state === 'undefined') {
    return state
  }
 
  // For now, don't handle any actions
  // and just return the state given to us.
  if (action.type === 'SELECT_POKEMON') {
    if (state.selectedPokemon.length >= 6) return state;
    const newPokemon = state.pokemon.find(p => p.number === action.number)
    return Object.assign(
      {},
      state,
      {
        pokemon: state.pokemon.filter(p => p.number !== newPokemon.number),
        selectedPokemon: [...state.selectedPokemon, newPokemon]
      }
    );
  }
  return state
}
