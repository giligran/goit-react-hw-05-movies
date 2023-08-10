import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useFetch } from 'hooks/useFetch';
import tmdbService from 'utils/TMDBService';

function MovieDetails() {
  const { movieId } = useParams();
  const [imageURL, setImageURL] = useState(null);
  const { isFetching, data: movieDetails, error, fetchData } = useFetch();

  useEffect(() => {
    fetchData(tmdbService.getMovieDetails(movieId));
  }, [fetchData]);

  useEffect(() => {
    const fetchImage = async () => {
      if (!movieDetails) {
        return;
      }
      try {
        const url = await tmdbService.getMovieImage(movieDetails.backdrop_path);
        setImageURL(url);
        console.log(url);
      } catch (error) {
        console.error('Ошибка при загрузке изображения:', error);
      }
    };

    fetchImage();
    return () => {
      if (imageURL) {
        URL.revokeObjectURL(imageURL);
      }
    };
  }, [movieDetails]);

  if (isFetching || movieDetails === null) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <Link to="/movies" aria-label="Back to movies">
        back to movies
      </Link>
      <div>
        <img src={imageURL} alt="" />
        <h2>{movieDetails.original_title}</h2>
        <p>{movieDetails.overview}</p>
        <h3>Genres</h3>
        <ul>
          {movieDetails.genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>{' '}
      </div>
    </div>
  );
}

export default MovieDetails;

// const [movieDetails, setMovieDetails] = useState([]);
// const [isLoading, setIsLoading] = useState(false);
// const [err, setError] = useState(null);

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

// console.log('isLoading:', isLoading);
// console.log('movieDetails:', movieDetails);
// console.log('error:', error);
