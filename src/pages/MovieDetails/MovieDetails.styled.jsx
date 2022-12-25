import styled from 'styled-components';

export const MovieContainer = styled.div``;

export const ReturnButton = styled.button``;

export const MovieInfoContainer = styled.div`
  display: flex;
  border-bottom: 2px solid grey;
  padding-bottom: 10px;
`;

export const MainInfoWrapper = styled.div`
  flex-direction: column;
  margin-left: 30px;
`;

export const MoviePoster = styled.img`
  display: block;
`;

export const MovieTitle = styled.h1`
  margin: 20px 0 0;
`;

export const MovieRating = styled.p`
  margin: 20px 0 0;
`;

export const MovieOverviewTitle = styled.h2`
  margin: 20px 0 0;
`;

export const MovieOverviewText = styled.p`
  margin: 20px 0 0;
`;

export const MovieGenresTitle = styled.h2`
  margin: 20px 0 0;
`;

export const DetailsInfoContainer = styled.div`
  border-bottom: 2px solid grey;
  padding: 20px;
`;

export const DetailsInfoTitle = styled.h3`
  margin: 0;
`;

export const DetailsInfoList = styled.ul`
  margin: 20px 0 0;
`;

export const DetailsInfoItem = styled.li`
  text-decoration: none;

  &:not(:last-child) {
    padding-bottom: 10px;
  }
`;
