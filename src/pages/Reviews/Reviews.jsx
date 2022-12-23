import fetchMovieReviews from 'fetchRequests/fetchMovieReviews';
import {
  ReviewsList,
  ReviewsItem,
  ReviewAuthor,
  ReviewAuthorContent,
} from './Reviews.styled';

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
    <ReviewsList>
      {reviews.map(({ id, author, content }) => {
        return (
          <ReviewsItem key={id}>
            <ReviewAuthor>Author: {author}</ReviewAuthor>
            <ReviewAuthorContent>{content}</ReviewAuthorContent>
          </ReviewsItem>
        );
      })}
    </ReviewsList>
  );
};

export default Reviews;
