import { useState, useEffect } from 'react';
import fetchMovieByKeyWord from 'fetchRequests/fetchMovieByKeyWord';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const [inputValue, setInputValue] = useState(query || '');
  const [results, setResults] = useState([]);

  const location = useLocation();

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
      <form onSubmit={handleSubmit}>
        <input type="input" value={inputValue} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {results.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Movies;
