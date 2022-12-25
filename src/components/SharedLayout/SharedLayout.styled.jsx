import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 100%;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  padding: 20px;
`;

export const StyledNavLink = styled(NavLink)`
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
