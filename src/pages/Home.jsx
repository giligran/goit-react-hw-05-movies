import { useEffect } from 'react';
import tmdbService from 'utils/TMDBService';
import { useFetch } from 'hooks/useFetch';
import FilmCollection from 'components/FilmCollection';
function Home() {
  const { isFetching, data, error, fetchData } = useFetch();

  useEffect(() => {
    fetchData(tmdbService.getTrendingMovies('week'));
  }, [fetchData]);

  const movies = data?.results;

  return (
    <section style={{ paddingTop: '32px' }}>
      <h1 style={{ marginBottom: '32px' }}>Trending today</h1>
      <FilmCollection error={error} isFetching={isFetching} movies={movies} />
    </section>
  );
}

export default Home;
