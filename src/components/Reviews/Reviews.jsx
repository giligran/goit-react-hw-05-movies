import { useFetch } from 'hooks/useFetch';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import tmdbService from 'utils/TMDBService';
import Loader from 'components/Loader/Loader';

function Reviews() {
  const { isFetching, data: reviews, error, fetchData } = useFetch();
  const { movieId } = useParams();

  useEffect(() => {
    fetchData(tmdbService.getMovieReviews(movieId));
  }, []);
  console.log(reviews);

  if (isFetching) {
    return <Loader open={true} />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Reviews</h1>
      {reviews && reviews.results && reviews.results.length > 0 ? (
        <ul>
          {reviews.results.map(review => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
              <p>Rating: {review.author_details.rating}</p>
              <p>
                Published: {new Date(review.created_at).toLocaleDateString()}
              </p>
              <a href={review.url} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
              <hr />
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
  );
}

export default Reviews;
