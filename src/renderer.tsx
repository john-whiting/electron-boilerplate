import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { inDev } from './utils/helpers';

// Say something
console.log('[ERWT] : Renderer execution started');

// Application to Render
const app = <App />;

// Render application in DOM
ReactDOM.render(app, document.getElementById('app'));

// Hot module replacement
if (inDev() && module.hot) module.hot.accept();
