import fetchMovieCast from 'fetchMovieCast';
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
    <ul>
      {cast.map(({ character, name, profile_path, cast_id }) => {
        return (
          <li key={cast_id}>
            <img src={profile_path} alt={name} />
            <p>{name}</p>
            <p>{character}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;
