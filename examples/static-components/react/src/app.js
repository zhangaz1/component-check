import React from 'react';
import { render } from 'react-dom';
import StaticComponent from './static-component';

render(
  React.createElement(StaticComponent),
  document.getElementById('example-app')
);
