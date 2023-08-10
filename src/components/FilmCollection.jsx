import FilmCollectionItem from './FilmCollectionItem';

function FilmCollection({ error, isFetching, movies }) {
  return (
    <div>
      {isFetching ? (
        <p>Loading...</p>
      ) : (
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
      )}
    </div>
  );
}

export default FilmCollection;
