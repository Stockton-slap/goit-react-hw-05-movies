import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import MovieList from 'components/MovieList';
import Filter from 'components/Filter';
import Notification from 'components/Notification';
import Loader from 'components/Loader';

import fetchMovieByKeyWord from 'fetchRequests/fetchMovieByKeyWord';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const [inputValue, setInputValue] = useState(query || '');
  const [results, setResults] = useState([]);
  const [noMatch, setNoMatch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }
    setIsLoading(true);

    fetchMovieByKeyWord(query)
      .then(({ results }) => {
        if (results.length === 0) {
          setNoMatch(true);
        }

        setResults(results);
      })
      .catch(error => error)
      .finally(() => setIsLoading(false));
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
      {isLoading ? <Loader /> : <MovieList results={results} />}
      {noMatch && <Notification />}
    </div>
  );
};

export default Movies;
