import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Container, StyledNavLink } from './SharedLayout.styled';
import Loader from 'components/Loader';

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

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
