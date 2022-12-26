import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const MovieLink = styled(Link)`
  padding-left: 20px;
  margin: 0;
  display: flex;
  flex-direction: column;
  text-decoration: none;
`;
