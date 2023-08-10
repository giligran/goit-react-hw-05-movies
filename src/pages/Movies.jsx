import { useEffect, useState } from 'react';
import { useFetch } from 'hooks/useFetch';
import tmdbService from 'utils/TMDBService';
import FilmCollection from 'components/FilmCollection';

function Movies() {
  const [query, setQuery] = useState('');
  const { isFetching, data: moviesList, error, fetchData } = useFetch();

  const handleSearchSubmit = e => {
    e.preventDefault();
    fetchData(tmdbService.searchMovies(query));
    setQuery('');
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
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <FilmCollection error={error} isFetching={isFetching} movies={movies} />
    </section>
  );
}

export default Movies;
