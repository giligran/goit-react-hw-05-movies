import React from 'react';
import PropTypes from 'prop-types';
import CastListItem from 'components/CastListItem';
import { CastListContainer } from './CastList.styled';

function CastList({ cast }) {
  if (!cast || cast.length === 0) {
    return <p>No cast information available.</p>;
  }
  if (!Array.isArray(cast)) {
    return <p>Cast data is not valid.</p>;
  }
  return (
    <div>
      <h1>Cast</h1>
      <CastListContainer>
        {cast.map(actor => (
          <CastListItem key={actor.id} actor={actor} />
        ))}
      </CastListContainer>
    </div>
  );
}

CastList.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      profile_path: PropTypes.string,
    })
  ),
};

export default CastList;
