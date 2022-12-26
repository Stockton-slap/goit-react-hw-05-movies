import { useState, useEffect } from 'react';

import TrendMovieItem from 'components/TrendMovieItem';

import fetchTradingMovies from 'fetchRequests/fetchTradingMovies';

import { HomeTitle, MovieList } from './Home.styled';

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
      .catch(error => error);
  }, []);

  return (
    <div>
      <HomeTitle>Trending today</HomeTitle>
      <MovieList>
        {movies.map(({ title, id }) => (
          <TrendMovieItem key={id} title={title} id={id} />
        ))}
      </MovieList>
    </div>
  );
};

export default Home;
