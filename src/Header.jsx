import React from 'react';
import { connect } from 'react-redux';
import './Header.css';
import { PokemonLink } from './PokemonLink';
import { deselectPokemon } from './actions';

const mapStateToProps = state => ({
  selectedPokemon: state.selectedPokemon
});

const mapDispatchtoProps = dispatch => ({
  deselectPokemon: number => {
    dispatch(deselectPokemon(number))
  }
});

const Header = ({
  selectedPokemon = [],
  deselectPokemon
}) => (
  <header className="App-header">
    <h1 className="App-title">Pokemon Go DB</h1>
    <div className="selected-pokemon">
      {selectedPokemon.map(
        p => (
          <PokemonLink
            key={p.number}
            color={(p.types && p.types[0]) || 'Unknown'}
            name={p.name}
            number={p.number}
            action={deselectPokemon}
          />
        )
      )}
    </div>
  </header>
);

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(Header);
