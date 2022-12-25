import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieLinkTitle = styled(Link)`
  padding-left: 20px;
  margin: 0;
  display: flex;
  flex-direction: column;
  text-decoration: none;
`;

export const MovieItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;
