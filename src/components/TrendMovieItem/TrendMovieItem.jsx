import { MovieItem, MovieLinkTitle } from './TrendMovieItem.styled';

const TrendMovieItem = ({ title, id }) => {
  return (
    <MovieItem>
      <MovieLinkTitle to={`/movies/${id}`}>{title}</MovieLinkTitle>
    </MovieItem>
  );
};

export default TrendMovieItem;
