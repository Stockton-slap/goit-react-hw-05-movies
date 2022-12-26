import { ReviewAuthor, ReviewAuthorContent } from './ReviewItem.styled';

const ReviewItem = ({ review }) => {
  const { author, content } = review;

  return (
    <li>
      <ReviewAuthor>Author: {author}</ReviewAuthor>
      <ReviewAuthorContent>{content}</ReviewAuthorContent>
    </li>
  );
};

export default ReviewItem;
