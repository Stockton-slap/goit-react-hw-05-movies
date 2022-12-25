import fetchMovieById from 'fetchRequests/fetchMovieById';
import { MovieContainer } from './MovieDetails.styled';

import MovieInfoContainer from 'components/MovieInfoContainer/MovieInfoContainer';
import AdditionalInfo from 'components/AdditionalInfo/AdditionalInfo';
import ReturnButton from 'components/ReturnButton/ReturnButton';

import Loader from 'components/Loader/Loader';

import { useParams, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);

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

  return (
    <MovieContainer>
      <ReturnButton />
      <MovieInfoContainer movie={movie} />
      <AdditionalInfo id={movie.id} />
      <Outlet />
    </MovieContainer>
  );
};

export default MovieDetails;
