import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useFetch } from 'hooks/useFetch';
import tmdbService from 'utils/TMDBService';

function MovieDetails() {
  const { movieId } = useParams();
  const { isFetching, data: movieDetails, error, fetchData } = useFetch();
  // const [movieDetails, setMovieDetails] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [err, setError] = useState(null);

  console.log(movieId);

  // useEffect(() => {
  //   const fetchDetails = async () => {
  //     setIsLoading(true);
  //     try {
  //       const response = await tmdbService.getMovieDetails(movieId);
  //       if (!response) {
  //         throw new Error('Movie details not found.');
  //       }
  //       setMovieDetails(response);
  //     } catch (error) {
  //       setError(error);
  //       console.error(error.message, err);
  //     } finally {
  //       setIsLoading(false);
  //       console.log(movieDetails, 'movieDetails');
  //     }
  //   };

  //   fetchDetails();
  // }, []);

  useEffect(() => {
    fetchData(tmdbService.getMovieDetails(movieId));
  }, [fetchData, movieId]);

  console.log('isFetching:', isFetching);
  console.log('movieDetails:', movieDetails);
  console.log('error:', error);

  // console.log('isLoading:', isLoading);
  // console.log('movieDetails:', movieDetails);
  // console.log('error:', error);

  return (
    <div>
      <h2>{movieDetails.original_title}</h2>
      <p>{movieDetails.overview}</p>
    </div>
  );
}

export default MovieDetails;
