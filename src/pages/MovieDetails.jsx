import { useParams, Link, Outlet } from 'react-router-dom';
import fetchMovieById from 'fetchMovieById';
import { useState, useEffect } from 'react';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});

  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieById(movieId)
      .then(
        ({
          title,
          overview,
          genres,
          id,
          poster_path,
          vote_average,
          release_date,
        }) => {
          return setMovie({
            title,
            overview,
            genres,
            id,
            poster_path,
            vote_average,
            release_date,
          });
        }
      )
      .catch(error => console.log(error));
  }, [movieId]);

  const {
    title,
    overview,
    genres,
    id,
    poster_path,
    vote_average,
    release_date,
  } = movie;

  return (
    <div>
      <img src={poster_path} alt={title} />
      <h1>
        {title} {release_date}
      </h1>
      <p>{vote_average}</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h2>Genres</h2>
      {/* {movie && <p>{genres.map(genre => genre.name)}</p>} */}

      <p>Additional information</p>
      <ul>
        <li>
          <Link to={`/movies/${id}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`/movies/${id}/reviews`}>Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
