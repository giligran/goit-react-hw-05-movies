import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledLink, Header, ListLinks } from './Layout.styled';
import Loader from 'components/Loader/Loader';
import { Container } from '@mui/material';

function Layuot() {
  return (
    <Container fixed>
      <Header>
        <nav>
          <ListLinks>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="movies">Movies</StyledLink>
            </li>
          </ListLinks>
        </nav>
      </Header>
      <main>
        <Suspense fallback={<Loader open={true} />}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
}

export default Layuot;
