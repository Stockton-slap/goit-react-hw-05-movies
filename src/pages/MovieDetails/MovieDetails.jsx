import { useState, useEffect } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';

import MovieInfoContainer from 'components/MovieInfoContainer';
import AdditionalInfo from 'components/AdditionalInfo';
import ReturnButton from 'components/ReturnButton';
import Loader from 'components/Loader';

import fetchMovieById from 'fetchRequests/fetchMovieById';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);

  const location = useLocation();

  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieById(movieId)
      .then(
        ({
          title,
          overview,
          genres,
          id,
          poster_path,
          vote_average,
          release_date,
        }) => {
          return setMovie({
            title,
            overview,
            genres,
            id,
            poster_path,
            vote_average,
            release_date,
          });
        }
      )
      .catch(error => console.log(error));
  }, [movieId]);

  if (movie === null) {
    return <Loader />;
  }

  const goBackPath = location.state?.from ?? '/movies';

  return (
    <div>
      <ReturnButton path={goBackPath} />
      <MovieInfoContainer movie={movie} />
      <AdditionalInfo id={movie.id} path={goBackPath} />
      <Outlet />
    </div>
  );
};

export default MovieDetails;
