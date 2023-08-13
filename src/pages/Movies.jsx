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
    const form = e.currentTarget;

    if (!query) {
      return;
    }

    form.reset();
    fetchData(tmdbService.searchMovies(query));
  };

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  const movies = moviesList?.results;

  return (
    <section>
      <form onSubmit={handleSearchSubmit}>
        <label htmlFor="searchInput">Search:</label>
        <input
          type="text"
          id="searchInput"
          placeholder="Enter a search term"
          onChange={e => updateQueryString(e.target.value)}
          autoComplete="off"
        />
        <button type="submit">Search</button>
      </form>
      <FilmCollection error={error} isFetching={isFetching} movies={movies} />
    </section>
  );
}

export default Movies;
