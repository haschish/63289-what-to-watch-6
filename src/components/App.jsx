import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from './Main';
import SignIn from './Sign-in';
import MyList from './MyList';
import MoviePage from './MoviePage';
import AddReview from './AddReview';
import Player from './Player';
import NotFound from './NotFound';

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main {...props}/>
        </Route>
        <Route path="/login" exact>
          <SignIn></SignIn>
        </Route>
        <Route path="/mylist" exact>
          <MyList movies={props.movies}></MyList>
        </Route>
        <Route
          path="/films/:id/addreview"
          exact
          render={(routeProps) => {
            const {id} = routeProps.match.params;
            const movie = props.movies.find((it) => it.id === Number.parseInt(id, 10));
            return (movie) ? <AddReview movie={movie}></AddReview> : <NotFound></NotFound>;
          }}
        ></Route>
        <Route
          path="/films/:id"
          exact
          render={(routeProps) => {
            const {id} = routeProps.match.params;
            const movie = props.movies.find((it) => it.id === Number.parseInt(id, 10));
            return (movie) ? <MoviePage movie={movie} likeThis={props.movies.slice(0, 4)}></MoviePage> : <NotFound></NotFound>;
          }}
        ></Route>
        <Route
          path="/player/:id"
          exact
          render={(routeProps) => {
            const {id} = routeProps.match.params;
            const movie = props.movies.find((it) => it.id === Number.parseInt(id, 10));
            return (movie) ? <Player movie={movie}></Player> : <NotFound></NotFound>;
          }}
        ></Route>
        <Route>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  title: PropTypes.string,
  genre: PropTypes.string,
  year: PropTypes.string,
  movies: PropTypes.array,
};

export default App;
