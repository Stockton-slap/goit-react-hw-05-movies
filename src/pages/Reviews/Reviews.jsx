import fetchMovieReviews from 'fetchMovieReviews';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieReviews(movieId).then(({ results }) => {
      console.log(results);
      return setReviews(results);
    });
  }, [movieId]);

  return (
    <ul>
      {reviews.map(({ id, author, content }) => {
        return (
          <li key={id}>
            <h1>{author}</h1>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
