import { useFetch } from 'hooks/useFetch';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import tmdbService from 'utils/TMDBService';
import Loader from 'components/Loader/Loader';
import ReviewsList from 'components/ReviewsList';

function Reviews() {
  const { isFetching, data: reviews, error, fetchData } = useFetch();
  const { movieId } = useParams();

  useEffect(() => {
    fetchData(tmdbService.getMovieReviews(movieId));
  }, [fetchData, movieId]);

  if (isFetching) {
    return <Loader open={true} />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return <ReviewsList reviews={reviews?.results} />;
}

export default Reviews;
