import React from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';
import MovieList from './MovieList';
import Header from './Header';
import Footer from './Footer';

const MyList = (props) => (
  <div className="user-page">
    <Header type="page">
      <h1 className="page-title user-page__title">My list</h1>
    </Header>

    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <MovieList movies={props.movies} />
    </section>

    <Footer></Footer>
  </div>
);

MyList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape(Movie.propTypes))
};

export default MyList;
