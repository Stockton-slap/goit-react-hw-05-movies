import { useLocation } from 'react-router-dom';

import { Item, MovieLink } from './MovieItem.styled';

const MovieItem = ({ result }) => {
  const location = useLocation();

  const { title, id } = result;

  return (
    <Item>
      <MovieLink to={`/movies/${id}`} state={{ from: location }}>
        {title}
      </MovieLink>
    </Item>
  );
};

export default MovieItem;
