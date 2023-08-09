import { Link } from 'react-router-dom';

function FilmCollectionItem({ movie, error, isFetching }) {
  if (error) {
    return <p>Error: {error}</p>;
  }

  if (isFetching) {
    return <p>Loading...</p>;
  }

  if (!movie) {
    return null;
  }

  return (
    <li>
      <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
    </li>
  );
}

export default FilmCollectionItem;
