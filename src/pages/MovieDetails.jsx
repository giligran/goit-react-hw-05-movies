import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { useState, useEffect, Suspense, useRef } from 'react';
import { useFetch } from 'hooks/useFetch';
import tmdbService from 'utils/TMDBService';
import styled from '@emotion/styled';

const Section = styled.section`
  padding-top: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--cornflower, #e7e9fc);
`;

const DetailsWap = styled.div`
  display: flex;
`;

const Thumb = styled.div`
  min-width: 300px;
`;

const MovieInfo = styled.div`
  padding: 0 32px;
`;

const DetailsList = styled.ul`
  display: felex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const StyledLink = styled(NavLink)`
  font-size: 20px;
  display: inline-block;
  color: #2e2f42;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.32px;
  &.active {
    color: orange;
  }
`;

function MovieDetails() {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/movies');

  const { movieId } = useParams();
  const [imageURL, setImageURL] = useState(null);
  const { isFetching, data: movieDetails, error, fetchData } = useFetch();

  useEffect(() => {
    fetchData(tmdbService.getMovieDetails(movieId));
  }, [fetchData, movieId]);

  useEffect(() => {
    const fetchImage = async () => {
      if (!movieDetails) {
        return;
      }
      try {
        const url = await tmdbService.getMovieImage(movieDetails.backdrop_path);
        setImageURL(url);
      } catch (error) {
        console.error('Ошибка при загрузке изображения:', error);
      }
    };

    fetchImage();
    return () => {
      if (imageURL) {
        URL.revokeObjectURL(imageURL);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieDetails, movieId]);

  if (isFetching || movieDetails === null) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <Section>
        <StyledLink to={backLinkHref.current} aria-label="Back to movies">
          back
        </StyledLink>
        <DetailsWap>
          <Thumb>
            <img src={imageURL} alt="" />
          </Thumb>
          <MovieInfo>
            <h2>{movieDetails.original_title}</h2>
            <p>{movieDetails.overview}</p>
            <h3>Genres</h3>
            <ul>
              {movieDetails.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </MovieInfo>
        </DetailsWap>
      </Section>
      <Section>
        <DetailsList>
          <li>
            <StyledLink to="cast">cast</StyledLink>
          </li>
          <li>
            <StyledLink to="reviews">reviews</StyledLink>
          </li>
        </DetailsList>
        <Suspense>
          <Outlet />
        </Suspense>
      </Section>
    </>
  );
}

export default MovieDetails;
