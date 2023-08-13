import styled from '@emotion/styled';
export const CastListContainer = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px; /* Пространство между элементами */

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
