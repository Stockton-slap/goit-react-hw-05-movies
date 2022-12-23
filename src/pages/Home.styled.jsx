import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeTitle = styled.h1`
  padding-left: 20px;
`;

export const MovieLinkTitle = styled(Link)`
  padding-left: 20px;
  margin: 0;
  display: flex;
  flex-direction: column;
  text-decoration: none;
`;

export const MovieList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const MovieItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;
