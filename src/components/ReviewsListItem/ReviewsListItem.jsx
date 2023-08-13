import React from 'react';
import PropTypes from 'prop-types';

function ReviewsListItem({ review }) {
  return (
    <li>
      <h3>Author: {review.author}</h3>
      <p>{review.content}</p>
      {review.author_details.rating && (
        <p>Rating: {review.author_details.rating}</p>
      )}
      <p>Published: {new Date(review.created_at).toLocaleDateString()}</p>
      <a href={review.url} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
      <hr />
    </li>
  );
}

ReviewsListItem.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author_details: PropTypes.shape({
      rating: PropTypes.number,
    }),
    created_at: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};

export default ReviewsListItem;
