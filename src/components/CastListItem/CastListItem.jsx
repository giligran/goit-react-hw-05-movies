import React from 'react';
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

export default CastListItem;
