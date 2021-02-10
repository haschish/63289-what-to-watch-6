import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';

const movies = new Array(20).fill(null);
ReactDom.render(<App title="The Grand Budapest Hotel" genre="Drama" year="2014" movies={movies}/>, document.querySelector('#root'));
