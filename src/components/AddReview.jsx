import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Header from './Header';
import Movie from './Movie';
import ReviewForm from './ReviewForm';
import {lightenColor} from '../util';


const AddReview = (props) => {
  const {id, name, posterImage, backgroundImage, backgroundColor} = props.movie;

  return (
    <section className="movie-card movie-card--full" style={{backgroundColor}}>
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`../${id}`} className="breadcrumbs__link">{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
        </Header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={posterImage} alt={name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <ReviewForm
          backgroundColor={lightenColor(backgroundColor, 16)}
          onSubmit={() => {}}
        />
      </div>

    </section>
  );
};

AddReview.propTypes = {
  movie: PropTypes.shape(Movie.propTypes)
};

export default AddReview;
