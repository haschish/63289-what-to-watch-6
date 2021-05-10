import React from 'react';
import PropTypes from 'prop-types';

const RatingStar = (props) => {
  const {number, onChange} = props;
  return (
    <React.Fragment>
      <input className="rating__input" id={`start-${number}`} type="radio" name="rating" value={number} onChange={onChange}/>
      <label className="rating__label" htmlFor={`start-${number}`}>Rating {number}</label>
    </React.Fragment>
  );
};

RatingStar.propTypes = {
  number: PropTypes.number,
  onChange: PropTypes.func
};

const Rating = (props) => {
  const {onChange = () => {}} = props;
  const handleChange = (evt) => {
    const rate = Number.parseInt(evt.target.value, 10);
    onChange(rate);
  };

  return (
    <div className="rating">
      <div className="rating__stars">
        {
          new Array(props.number).fill(null).map((_, index) => {
            return (
              <RatingStar
                key={`star-input-${index}`}
                number={index + 1}
                onChange={handleChange}
              />
            );
          })
        }
      </div>
    </div>
  );
};

Rating.propTypes = {
  number: PropTypes.number.isRequired,
  onChange: PropTypes.func
};

export default Rating;
