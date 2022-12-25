import fetchMovieById from 'fetchRequests/fetchMovieById';
import {
  MovieContainer,
  ReturnButton,
  MovieInfoContainer,
  MainInfoWrapper,
  MoviePoster,
  MovieTitle,
  MovieRating,
  MovieOverviewTitle,
  MovieOverviewText,
  MovieGenresTitle,
  DetailsInfoContainer,
  DetailsInfoTitle,
  DetailsInfoList,
  DetailsInfoItem,
} from './MovieDetails.styled';

import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);

  const { movieId } = useParams();

  const location = useLocation();

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
    return <p>loading</p>;
  }

  const {
    title,
    overview,
    genres,
    id,
    poster_path,
    vote_average,
    release_date,
  } = movie;

  return (
    <MovieContainer>
      <Link to={location.state?.from || '/'}>
        <ReturnButton>-- Go back</ReturnButton>
      </Link>

      <MovieInfoContainer>
        <MoviePoster
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
          width="300"
        />
        <MainInfoWrapper>
          <MovieTitle>
            {title} ({release_date.slice(0, 4)})
          </MovieTitle>
          <MovieRating>User score: {vote_average}</MovieRating>
          <MovieOverviewTitle>Overview</MovieOverviewTitle>
          <MovieOverviewText>{overview}</MovieOverviewText>
          <MovieGenresTitle>Genres</MovieGenresTitle>
          {movie && genres.map(({ name, id }) => <p key={id}>{name}</p>)}
        </MainInfoWrapper>
      </MovieInfoContainer>

      <DetailsInfoContainer>
        <DetailsInfoTitle>Additional information</DetailsInfoTitle>
        <DetailsInfoList>
          <DetailsInfoItem>
            <Link style={{ textDecoration: 'none' }} to={`/movies/${id}/cast`}>
              Cast
            </Link>
          </DetailsInfoItem>
          <li>
            <Link
              style={{ textDecoration: 'none' }}
              to={`/movies/${id}/reviews`}
            >
              Reviews
            </Link>
          </li>
        </DetailsInfoList>
      </DetailsInfoContainer>

      <Outlet />
    </MovieContainer>
  );
};

export default MovieDetails;
