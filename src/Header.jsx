import React from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './Header.css';

const Header = ({
  selectedPokemon = []
}) => (
  <header className="App-header">
    <h1 className="App-title">Pokemon Go DB</h1>
    {
      selectedPokemon.map(p => <div> {p.name}</div>)
    }
  </header>
);

export default connect(
  state=>state,
  () => ({})
)(Header);
