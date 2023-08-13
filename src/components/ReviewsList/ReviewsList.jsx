import React from 'react';
import PropTypes from 'prop-types';
import ReviewsListItem from 'components/ReviewsListItem';
function ReviewsList({ reviews }) {
  return (
    <div>
      <h1>Reviews</h1>
      {reviews && reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <ReviewsListItem key={review.id} review={review} />
          ))}
        </ul>
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
  );
}

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object),
};

export default ReviewsList;
