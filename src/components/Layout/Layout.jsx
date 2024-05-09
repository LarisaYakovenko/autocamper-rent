import { Outlet } from 'react-router-dom';
import React, { Suspense } from 'react';
import { TbCamper } from 'react-icons/tb';

import {
  Container,
  Header,
  Item,
  List,
  Logo,
  Nav,
  StyleNavLink,
} from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Container>
        <Header>
          <Logo>
            <TbCamper size="36" />
          </Logo>
          <Nav>
            <List>
              <Item>
                <StyleNavLink to="/">Home</StyleNavLink>
              </Item>
              <Item>
                <StyleNavLink to="/catalog">Catalog</StyleNavLink>
              </Item>
              <Item>
                <StyleNavLink to="/favorites">Favorites</StyleNavLink>
              </Item>
            </List>
          </Nav>
        </Header>

        <Suspense>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
