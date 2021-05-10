import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Movie = (props) => {
  const {id, name, previewImage, onMouseEnter = () => {}, onMouseLeave} = props;

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={() => onMouseEnter(id)}
      onMouseLeave={onMouseLeave}>
      <div className="small-movie-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
};

Movie.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  posterImage: PropTypes.string,
  previewImage: PropTypes.string,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func
};

export default Movie;
