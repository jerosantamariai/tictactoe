import React from 'react';
import ReactDOM from 'react-dom';
import TicTacToe from './App';

// Add css files
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css'; // 5.x
import './index.css';

// Add js files
import 'jquery';
import 'popper.js';
import 'bootstrap';





ReactDOM.render(<TicTacToe />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();