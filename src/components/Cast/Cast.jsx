import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from 'hooks/useFetch';
import tmdbService from 'utils/TMDBService';
import CastList from 'components/CastList';
import Loader from 'components/Loader';

function Cast() {
  const { isFetching, data, error, fetchData } = useFetch();
  const { movieId } = useParams();

  useEffect(() => {
    fetchData(tmdbService.getMovieCredits(movieId));
  }, [fetchData, movieId]);

  const cast = data?.cast;

  if (isFetching) {
    return <Loader open={true} />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return <CastList cast={cast} />;
}

export default Cast;
