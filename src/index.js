import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const elementId = 'react-bootstrap-root';
document.body.classList.add('reactBootstrap');
ReactDOM.render(<App />, document.getElementById(elementId));
