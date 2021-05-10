import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const types = {
  page: `user-page`,
  card: `movie-card`
};

const Header = (props) => {
  const {type = `card`} = props;

  return (
    <header className={`page-header ${types[type]}__head`}>
      <div className="logo">
        <Link to="/" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      {props.children}

      <div className="user-block">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  type: PropTypes.string,
  children: PropTypes.any
};

export default Header;
