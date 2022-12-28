import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ReviewItem from 'components/ReviewItem';
import Loader from 'components/Loader';

import fetchMovieReviews from 'fetchRequests/fetchMovieReviews';

import { ReviewsList } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchMovieReviews(movieId)
      .then(({ results }) => setReviews(results))
      .catch(error => error)
      .finally(() => setIsLoading(false));
  }, [movieId]);

  if (isLoading) {
    return <Loader />;
  }

  if (reviews.length === 0) {
    return <div>There are no reviews yet.</div>;
  }

  return (
    <ReviewsList>
      {reviews.map(review => {
        return <ReviewItem review={review} key={review.id} />;
      })}
    </ReviewsList>
  );
};

export default Reviews;
