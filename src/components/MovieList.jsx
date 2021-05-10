import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';

const MovieList = (props) => {
  const [, setActive] = useState(``);
  const {movies} = props;

  return (
    <div className="catalog__movies-list">
      {movies.map((movie) => <Movie
        key={movie.id}
        {...movie}
        onMouseEnter={(id) => setActive(id)}
        onMouseLeave={() => setActive(``)}
      />)}
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape(Movie.propTypes))
};

export default MovieList;
