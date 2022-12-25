import fetchMovieCast from 'fetchRequests/fetchMovieCast';
import { CastList } from './Cast.styled';
import CastItem from 'components/CastItem/CastItem';

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
      {cast.map(actor => {
        return <CastItem actor={actor} key={actor.cast_id} />;
      })}
    </CastList>
  );
};

export default Cast;
