// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
// CSS
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

// import Badge from './components/Badge'
import BadgeNew from './pages/BadgeNew';

// ReactDOM.render(__qué__, __dónde__); siempre hay que darle un elemento
const container = document.getElementById('app')
ReactDOM.render( < BadgeNew / > , container);