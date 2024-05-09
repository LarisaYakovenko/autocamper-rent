import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;

  /* display: block; */
  /* justify-content: center; */

  margin: 0 auto;
`;
export const Logo = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
`;
export const Nav = styled.nav`
  /* font-weight: 600;

  font-size: 24px;
  cursor: pointer; */
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #111;
  padding: 10px 30px;
  max-width: 1440px;
`;
export const List = styled.ul`
  display: flex;
  gap: 40px;
`;
export const Item = styled.li``;
export const StyleNavLink = styled(NavLink)`
  font-size: 24px;
  cursor: pointer;
  color: #111;
  text-decoration: none;
  &.active {
    color: red;
    text-decoration: underline;
  }
`;
