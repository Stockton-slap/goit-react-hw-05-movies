import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import CastItem from 'components/CastItem';
import Loader from 'components/Loader';

import fetchMovieCast from 'fetchRequests/fetchMovieCast';

import { CastList } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchMovieCast(movieId)
      .then(({ cast }) => setCast(cast))
      .catch(error => error)
      .finally(() => setIsLoading(false));
  }, [movieId]);

  if (isLoading) {
    return <Loader />;
  }

  if (cast.length === 0) {
    return <div>No information.</div>;
  }

  return (
    <CastList>
      {cast.map(actor => {
        return <CastItem actor={actor} key={actor.cast_id} />;
      })}
    </CastList>
  );
};

export default Cast;
