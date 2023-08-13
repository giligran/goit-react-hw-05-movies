import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { useFetch } from 'hooks/useFetch';
import tmdbService from 'utils/TMDBService';

function MovieDetails() {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  const { movieId } = useParams();
  const [imageURL, setImageURL] = useState(null);
  const { isFetching, data: movieDetails, error, fetchData } = useFetch();

  useEffect(() => {
    fetchData(tmdbService.getMovieDetails(movieId));
  }, [fetchData, movieId]);

  useEffect(() => {
    const fetchImage = async () => {
      if (!movieDetails) {
        return;
      }
      try {
        const url = await tmdbService.getMovieImage(movieDetails.backdrop_path);
        setImageURL(url);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieDetails, movieId]);

  if (isFetching || movieDetails === null) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <Link to={backLinkHref} aria-label="Back to movies">
        back
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
        </ul>
        <ul>
          <li>
            <Link to="cast">cast</Link>
          </li>
          <li>
            <Link to="reviews">reviews</Link>
          </li>
        </ul>
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default MovieDetails;
