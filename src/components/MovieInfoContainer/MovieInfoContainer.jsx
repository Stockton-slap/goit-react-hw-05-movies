import {
  Container,
  MainInfoWrapper,
  MoviePoster,
  MovieTitle,
  MovieRating,
  MovieOverviewTitle,
  MovieOverviewText,
  MovieGenresTitle,
} from './MovieInfoContainer.styled';

const defaultMoviePic =
  'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg';

const MovieInfoContainer = ({ movie }) => {
  const { title, overview, genres, poster_path, vote_average, release_date } =
    movie;

  return (
    <Container>
      <MoviePoster
        src={
          poster_path === null
            ? defaultMoviePic
            : `https://image.tmdb.org/t/p/w500/${poster_path}`
        }
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
    </Container>
  );
};

export default MovieInfoContainer;
