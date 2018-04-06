import React from 'react';
import logo from './logo.svg';
import './Header.css';

const Header = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">Pokemon Go DB</h1>
  </header>
);

export default Header;