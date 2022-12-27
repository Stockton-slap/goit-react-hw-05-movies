import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import MovieList from 'components/MovieList';
import Filter from 'components/Filter';
import Notification from 'components/Notification';

import fetchMovieByKeyWord from 'fetchRequests/fetchMovieByKeyWord';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const [inputValue, setInputValue] = useState(query || '');
  const [results, setResults] = useState([]);
  const [noMatch, setNoMatch] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }

    fetchMovieByKeyWord(query).then(({ results }) => {
      if (results.length === 0) {
        setNoMatch(true);
      }

      setResults(results);
    });
  }, [query]);

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    setNoMatch(false);

    if (inputValue === '') {
      setResults([]);
      setSearchParams();
    } else {
      setSearchParams({ query: inputValue });
    }
  };

  return (
    <div>
      <Filter
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        inputValue={inputValue}
      />
      {noMatch && <Notification />}
      <MovieList results={results} />
    </div>
  );
};

export default Movies;
