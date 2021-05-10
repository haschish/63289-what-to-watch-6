import React from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';
import {zeroPadTag} from '../util';

const getHumanTime = (sec) => {
  const ss = sec % 60;
  const min = Math.floor(sec / 60);
  const mm = min % 60;
  const hh = Math.floor(min / 60);

  return zeroPadTag`${hh}:${mm}:${ss}`;
};


const Player = (props) => {
  const {previewImage, name, runTime} = props.movie;
  const progress = 30;
  const togglerLeft = progress / runTime * 100;
  return (
    <div className="player">
      <video src="#" className="player__video" poster={previewImage}></video>

      <button type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max={runTime}></progress>
            <div className="player__toggler" style={{left: `${togglerLeft}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{getHumanTime(runTime)}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{name}</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  movie: PropTypes.shape(Movie.propTypes)
};

export default Player;
