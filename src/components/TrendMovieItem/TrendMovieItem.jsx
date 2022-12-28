import { MovieItem, MovieLinkTitle } from './TrendMovieItem.styled';

import { useLocation } from 'react-router-dom';

const TrendMovieItem = ({ title, id }) => {
  const location = useLocation();

  return (
    <MovieItem>
      <MovieLinkTitle to={`/movies/${id}`} state={{ from: location }}>
        {title}
      </MovieLinkTitle>
    </MovieItem>
  );
};

export default TrendMovieItem;
