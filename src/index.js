import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, { Contact, Education, Work } from './App';
import * as serviceWorker from './serviceWorker';

// const DomComponent = [<Contact />, <Education />, <Work />]
ReactDOM.render([<Contact />, <Education />, <Work />], document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();