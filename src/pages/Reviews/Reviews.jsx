import fetchMovieReviews from 'fetchRequests/fetchMovieReviews';
import { ReviewsList } from './Reviews.styled';

import ReviewItem from 'components/ReviewItem/ReviewItem';

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieReviews(movieId).then(({ results }) => {
      return setReviews(results);
    });
  }, [movieId]);

  return (
    <ReviewsList>
      {reviews.map(review => {
        return <ReviewItem review={review} key={review.id} />;
      })}
    </ReviewsList>
  );
};

export default Reviews;
