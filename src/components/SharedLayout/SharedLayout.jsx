import { Outlet } from 'react-router-dom';

import { Container, StyledNavLink } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <div>
      <Container>
        <header>
          <nav>
            <StyledNavLink to="/" end>
              Home
            </StyledNavLink>
            <StyledNavLink to="/movies">Movies</StyledNavLink>
          </nav>
        </header>
      </Container>
      <Outlet />
    </div>
  );
};

export default SharedLayout;
