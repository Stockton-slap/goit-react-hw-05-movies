import fetchMovieById from 'fetchRequests/fetchMovieById';
import {
  MovieContainer,
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

import { useParams, Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});

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

  const {
    title,
    overview,
    // genres,
    id,
    poster_path,
    vote_average,
    release_date,
  } = movie;

  return (
    <MovieContainer>
      <MovieInfoContainer>
        <MoviePoster
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
          width="300"
        />
        <MainInfoWrapper>
          <MovieTitle>
            {title} ({release_date})
          </MovieTitle>
          <MovieRating>User score: {vote_average}</MovieRating>
          <MovieOverviewTitle>Overview</MovieOverviewTitle>
          <MovieOverviewText>{overview}</MovieOverviewText>
          <MovieGenresTitle>Genres</MovieGenresTitle>
          {/* {movie && <p>{genres.map(genre => genre.name)}</p>} */}
        </MainInfoWrapper>
      </MovieInfoContainer>

      <DetailsInfoContainer>
        <DetailsInfoTitle>Additional information</DetailsInfoTitle>
        <DetailsInfoList>
          <DetailsInfoItem>
            <Link to={`/movies/${id}/cast`}>Cast</Link>
          </DetailsInfoItem>
          <li>
            <Link to={`/movies/${id}/reviews`}>Reviews</Link>
          </li>
        </DetailsInfoList>
      </DetailsInfoContainer>

      <Outlet />
    </MovieContainer>
  );
};

export default MovieDetails;
