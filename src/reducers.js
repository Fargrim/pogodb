import pokemon from './pokemon.js'
const initialState = {
  selectedPokemon: []
}

export const pogoApp = (state, action) => {
  console.log('pogo reducer');
  if (typeof state === 'undefined') {
    return initialState
  }
 
  // For now, don't handle any actions
  // and just return the state given to us.
  if (action.type === 'SELECT_POKEMON') {
    const newPokemon = pokemon.find(p => p.number === action.number)
    return Object.assign(
      {},
      state,
      {selectedPokemon: [...state.selectedPokemon, newPokemon]});
  }
  return state
}
