import styled from '@emotion/styled';

export const ListItem = styled.li`
  display: grid;
  grid-template-rows: auto auto 1fr; /* Зарезервировать место под изображение */
  gap: 8px; /* Пространство между элементами */
`;

export const Thumbnail = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 150%; /* Соотношение сторон 1:1.5 для резервирования места под изображение */
  position: relative;
  text-align: center;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
