import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

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

export const Link = styled(NavLink)`
  color: #000;
  text-decoration: none;

  &.active {
    color: #b73a3a;
  }

  &:hover {
    color: #a0a0a0;
  }

  &:not(:last-child) {
    padding-right: 20px;
  }
`;
