import { useEffect } from 'react';
import tmdbService from 'utils/TMDBService';
import { useFetch } from 'hooks/useFetch';
import FilmCollection from 'components/FilmCollection';

function Home() {
  const { isFetching, data, error, fetchData } = useFetch();

  useEffect(() => {
    fetchData(tmdbService.getTrendingMovies());
  }, [fetchData]);

  const movies = data?.results;

  return (
    <>
      <h1>Trending today</h1>
      <FilmCollection error={error} isFetching={isFetching} movies={movies} />
    </>
  );
}

export default Home;
