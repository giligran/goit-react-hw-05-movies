import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  height: 72px;
  flex-shrink: 0;
  padding-top: 24px;
  padding-bottom: 24px;
  background: #fff;
  border-bottom: 1px solid var(--cornflower, #e7e9fc);
`;

export const ListLinks = styled.ul`
  display: flex;
  gap: 40px;
`;

export const StyledLink = styled(NavLink)`
  display: inline-block;
  color: #2e2f42;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.32px;
  &.active {
    color: orange;
  }
`;
