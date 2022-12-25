import {
  ReviewsItem,
  ReviewAuthor,
  ReviewAuthorContent,
} from './ReviewItem.styled';

const ReviewItem = ({ review }) => {
  const { author, content } = review;

  return (
    <ReviewsItem>
      <ReviewAuthor>Author: {author}</ReviewAuthor>
      <ReviewAuthorContent>{content}</ReviewAuthorContent>
    </ReviewsItem>
  );
};

export default ReviewItem;
