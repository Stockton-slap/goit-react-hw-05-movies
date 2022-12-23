import { useState, useEffect } from 'react';

import fetchTradingMovies from 'fetchRequests/fetchTradingMovies';
import { HomeTitle, MovieLinkTitle, MovieList, MovieItem } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTradingMovies()
      .then(({ results }) => {
        setMovies([
          ...results.map(({ title, id }) => ({
            title,
            id,
          })),
        ]);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <HomeTitle>Trending today</HomeTitle>
      <MovieList>
        {movies.map(({ title, id }) => (
          <MovieItem key={id}>
            <MovieLinkTitle to={`/movies/${id}`}>{title}</MovieLinkTitle>
          </MovieItem>
        ))}
      </MovieList>
    </div>
  );
};

export default Home;
