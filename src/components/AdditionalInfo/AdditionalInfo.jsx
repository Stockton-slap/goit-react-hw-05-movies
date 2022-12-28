import { useLocation } from 'react-router-dom';

import {
  DetailsInfoContainer,
  DetailsInfoTitle,
  DetailsInfoList,
  DetailsInfoItem,
  Link,
} from './AdditionalInfo.styled';

const AdditionalInfo = ({ id }) => {
  const location = useLocation();

  return (
    <DetailsInfoContainer>
      <DetailsInfoTitle>Additional information</DetailsInfoTitle>
      <DetailsInfoList>
        <DetailsInfoItem>
          <Link to={`/movies/${id}/cast`} state={{ from: location }}>
            Cast
          </Link>
        </DetailsInfoItem>
        <li>
          <Link to={`/movies/${id}/reviews`} state={{ from: location }}>
            Reviews
          </Link>
        </li>
      </DetailsInfoList>
    </DetailsInfoContainer>
  );
};

export default AdditionalInfo;
