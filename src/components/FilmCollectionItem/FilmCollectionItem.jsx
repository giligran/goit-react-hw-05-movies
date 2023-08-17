import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { CollectionItem } from './FilmCollectionItem.styled';

function FilmCollectionItem({ movie }) {
  const location = useLocation();
  if (!movie) {
    return null;
  }

  const title = movie.name ?? movie.title;

  return (
    <CollectionItem>
      <Link to={`/movies/${movie.id}`} state={{ from: location }}>
        {title}
      </Link>
    </CollectionItem>
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
