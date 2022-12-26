import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import CastItem from 'components/CastItem';

import fetchMovieCast from 'fetchRequests/fetchMovieCast';

import { CastList } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCast(movieId).then(({ cast }) => setCast(cast));
  }, [movieId]);

  return (
    <CastList>
      {cast.map(actor => {
        return <CastItem actor={actor} key={actor.cast_id} />;
      })}
    </CastList>
  );
};

export default Cast;
