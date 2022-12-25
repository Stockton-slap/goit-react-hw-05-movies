import { useState, useEffect } from 'react';
import fetchMovieByKeyWord from 'fetchRequests/fetchMovieByKeyWord';
import { useSearchParams } from 'react-router-dom';
import MovieList from 'components/MovieList/MovieList';
import Filter from 'components/Filter/Filter';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const [inputValue, setInputValue] = useState(query || '');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!query) {
      return;
    }

    fetchMovieByKeyWord(query).then(({ results }) => setResults(results));
  }, [query]);

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

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
      <MovieList results={results} />
    </div>
  );
};

export default Movies;
