import React from 'react';
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

export default CastList;
