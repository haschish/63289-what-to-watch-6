import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

const numberOfRate = 10;

const ReviewForm = (props) => {
  const {onSubmit = () => {}, backgroundColor} = props;
  const [data, setData] = useState({text: ``, rate: numberOfRate});

  const handlerRatingChange = (rate) => {
    setData({...data, rate});
  };

  const handlerTextChange = (evt) => {
    setData({...data, text: evt.target.value});
  };

  const handlerSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(data);
  };

  return (
    <form action="#" className="add-review__form" onSubmit={handlerSubmit}>
      <Rating number={numberOfRate} onChange={handlerRatingChange}/>

      <div className="add-review__text" style={{backgroundColor}}>
        <textarea className="add-review__textarea" name="review-text" id="review-text"
          placeholder="Review text"
          onChange={handlerTextChange}
        />

        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
};

ReviewForm.propTypes = {
  backgroundColor: PropTypes.string,
  onSubmit: PropTypes.func
};

export default ReviewForm;
