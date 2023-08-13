import React from 'react';
import PropTypes from 'prop-types';
import { Thumbnail, ListItem } from './CastListItem.styled';

function CastListItem({ actor }) {
  return (
    <ListItem key={actor.id}>
      {actor.profile_path ? (
        <Thumbnail className="thumb">
          <img
            src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
            alt={actor.name}
          />
        </Thumbnail>
      ) : (
        <Thumbnail>No image available</Thumbnail>
      )}
      <h3>{actor.name}</h3>
      <p>Character: {actor.character}</p>
    </ListItem>
  );
}

CastListItem.propTypes = {
  actor: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    profile_path: PropTypes.string,
  }).isRequired,
};

export default CastListItem;
