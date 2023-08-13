import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

function FilmCollectionItem({ movie }) {
  const location = useLocation();
  if (!movie) {
    return null;
  }

  const title = movie.name ?? movie.title;

  return (
    <li>
      <Link to={`/movies/${movie.id}`} state={{ from: location }}>
        {title}
      </Link>
    </li>
  );
}

FilmCollectionItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    title: PropTypes.string,
  }),
};

export default FilmCollectionItem;
