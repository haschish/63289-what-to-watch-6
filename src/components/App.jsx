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
          <MyList></MyList>
        </Route>
        <Route path="/films/:id" exact>
          <MoviePage></MoviePage>
        </Route>
        <Route path="/films/:id/review" exact>
          <AddReview></AddReview>
        </Route>
        <Route path="/player/:id" exact>
          <Player></Player>
        </Route>
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
