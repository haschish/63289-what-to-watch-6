import React from 'react';
import Main from './Main';
import PropTypes from 'prop-types';

const App = (props) => {
  return <Main {...props}/>;
};

App.propTypes = {
  title: PropTypes.string,
  genre: PropTypes.string,
  year: PropTypes.string,
  movies: PropTypes.array,
};

export default App;
