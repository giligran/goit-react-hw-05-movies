import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useFetch } from 'hooks/useFetch';
import tmdbService from '../utils/TMDBService';

function MovieDetails() {
  const { movieId } = useParams();
  const { isFetching, data: movieDetails, error, fetchData } = useFetch();

  useEffect(() => {
    fetchData(() => tmdbService.getMovieDetails(movieId));
  }, [fetchData, movieId]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (isFetching || !movieDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{movieDetails['original_title']}</h2>
      <p>{movieDetails.overview}</p>
    </div>
  );
}

export default MovieDetails;
