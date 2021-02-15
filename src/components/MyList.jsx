import React from 'react';
import Movie from './Movie';
import Footer from './Footer';

const movies = new Array(10).fill({});

const MyList = () => (
  <div className="user-page">
    <header className="page-header user-page__head">
      <div className="logo">
        <a href="main.html" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <h1 className="page-title user-page__title">My list</h1>

      <div className="user-block">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      </div>
    </header>

    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <div className="catalog__movies-list">
        {movies.map((_, i) => <Movie key={i}/>)}
      </div>
    </section>

    <Footer></Footer>
  </div>
);

export default MyList;
