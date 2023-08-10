import { Link } from 'react-router-dom';

function FilmCollectionItem({ movie }) {
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
