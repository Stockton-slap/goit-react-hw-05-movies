import {
  DetailsInfoContainer,
  DetailsInfoTitle,
  DetailsInfoList,
  DetailsInfoItem,
  Link,
} from './AdditionalInfo.styled';

const AdditionalInfo = ({ id, path }) => {
  return (
    <DetailsInfoContainer>
      <DetailsInfoTitle>Additional information</DetailsInfoTitle>
      <DetailsInfoList>
        <DetailsInfoItem>
          <Link to={`/movies/${id}/cast`} state={{ from: path }}>
            Cast
          </Link>
        </DetailsInfoItem>
        <li>
          <Link to={`/movies/${id}/reviews`} state={{ from: path }}>
            Reviews
          </Link>
        </li>
      </DetailsInfoList>
    </DetailsInfoContainer>
  );
};

export default AdditionalInfo;
