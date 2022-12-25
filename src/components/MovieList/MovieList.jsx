import { List } from './MovieList.styled';
import MovieItem from 'components/MovieItem/MovieItem';

const MovieList = ({ results }) => {
  return (
    <List>
      {results.map(result => {
        return <MovieItem result={result} key={result.id} />;
      })}
    </List>
  );
};

export default MovieList;
