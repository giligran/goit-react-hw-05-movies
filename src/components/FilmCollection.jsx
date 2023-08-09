import FilmCollectionItem from './FilmCollectionItem';

function FilmCollection({ error, isFetching, movies }) {
  return (
    <ul>
      {movies && movies.length > 0 ? (
        movies.map(movie => (
          <FilmCollectionItem
            key={movie.id}
            movie={movie}
            error={error}
            isFetching={isFetching}
          />
        ))
      ) : (
        <p>No movies available.</p>
      )}
    </ul>
  );
}

export default FilmCollection;
