import { useEffect } from 'react';
import tmdbService from 'utils/TMDBService';
import { useFetch } from 'hooks/useFetch';
import FilmCollection from 'components/FilmCollection';

function Home() {
  const { isFetching, data, error, fetchData } = useFetch();

  useEffect(() => {
    fetchData(tmdbService.getTrendingMovies('week'));
  }, [fetchData]);

  console.log(isFetching, 'isFetching');
  console.log(data, 'data');
  console.log(error, 'error');

  const movies = data?.results;

  return (
    <section>
      <h1>Trending today</h1>
      <FilmCollection error={error} isFetching={isFetching} movies={movies} />
    </section>
  );
}

export default Home;
