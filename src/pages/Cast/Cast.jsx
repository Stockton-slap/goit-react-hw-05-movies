import fetchMovieCast from 'fetchRequests/fetchMovieCast';
import {
  CastList,
  CastItem,
  ActorPic,
  ActorName,
  MovieCharacter,
} from './Cast.styled';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCast(movieId).then(({ cast }) => setCast(cast));
  }, [movieId]);
  console.log(cast);
  return (
    <CastList>
      {cast.map(({ character, name, profile_path, cast_id }) => {
        return (
          <CastItem key={cast_id}>
            <ActorPic
              src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
              alt={name}
              width="200"
            />
            <ActorName>{name}</ActorName>
            <MovieCharacter>Character: {character}</MovieCharacter>
          </CastItem>
        );
      })}
    </CastList>
  );
};

export default Cast;
