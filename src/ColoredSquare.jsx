import React from 'react';
import './ColoredSquare.css';

const ColoredSquare = ({color, children}) => (
  <div
    className='colored-square'
    style={{backgroundColor: color}}
  >
    {children}
  </div>
);

export default ColoredSquare;
