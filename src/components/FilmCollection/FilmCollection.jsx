import Loader from 'components/Loader/Loader';
import FilmCollectionItem from '../FilmCollectionItem';
import { FilmCollectionList } from './FilmCollection.styled';

function FilmCollection({ error, isFetching, movies }) {
  return (
    <div>
      {isFetching ? (
        <Loader open={true} />
      ) : (
        <FilmCollectionList>
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
        </FilmCollectionList>
      )}
    </div>
  );
}

export default FilmCollection;
