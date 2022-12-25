import {
  DetailsInfoContainer,
  DetailsInfoTitle,
  DetailsInfoList,
  DetailsInfoItem,
  Link,
} from './AdditionalInfo.styled';

const AdditionalInfo = ({ id }) => {
  return (
    <DetailsInfoContainer>
      <DetailsInfoTitle>Additional information</DetailsInfoTitle>
      <DetailsInfoList>
        <DetailsInfoItem>
          <Link to={`/movies/${id}/cast`}>Cast</Link>
        </DetailsInfoItem>
        <li>
          <Link to={`/movies/${id}/reviews`}>Reviews</Link>
        </li>
      </DetailsInfoList>
    </DetailsInfoContainer>
  );
};

export default AdditionalInfo;
