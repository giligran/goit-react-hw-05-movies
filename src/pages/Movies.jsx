import { useSearchParams } from 'react-router-dom';

import { useFetch } from 'hooks/useFetch';
import tmdbService from 'utils/TMDBService';
import FilmCollection from 'components/FilmCollection';
import { useEffect } from 'react';

function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const { isFetching, data: moviesList, error, fetchData } = useFetch();

  useEffect(() => {
    if (query) {
      fetchData(tmdbService.searchMovies(query));
    }
  }, [query, fetchData]);

  const handleSearchSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const searchInput = form.elements.query;
    const newQuery = searchInput.value;
    if (!newQuery) {
      return;
    }
    setSearchParams({ query: newQuery });
    form.reset();
  };

  const movies = moviesList?.results;

  return (
    <section>
      <form onSubmit={handleSearchSubmit}>
        <label htmlFor="searchInput">Search:</label>
        <input
          name="query"
          type="text"
          id="searchInput"
          placeholder="Enter a search term"
          autoComplete="off"
        />
        <button type="submit">Search</button>
      </form>
      <FilmCollection error={error} isFetching={isFetching} movies={movies} />
    </section>
  );
}

export default Movies;
