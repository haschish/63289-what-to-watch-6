import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import {getFilms} from './mocks/films';

ReactDom.render(<App title="The Grand Budapest Hotel" genre="Drama" year="2014" movies={getFilms()}/>, document.querySelector(`#root`));
