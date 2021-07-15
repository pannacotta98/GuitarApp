import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Navigation = styled.ul`
  display: inline;
  list-style-type: none;
`;

const NavigationItem = styled.li`
  margin-left: 2.5rem;
  font-weight: 600;
  cursor: pointer;
  display: inline;

  .selected {
    border-bottom: var(--contrasting-text-color) solid 0.15rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const NavContainer = styled.nav`
  background-color: var(--main-accent);
  color: var(--contrasting-text-color);
  padding: 1.2rem var(--left-right-page-padding);
  box-shadow: var(--main-shadow);
  position: relative;
  z-index: 10;
`;

const TextLogo = styled.h3`
  display: inline;
`;

export function NavBar() {
  return (
    <NavContainer>
      <TextLogo>LOGO</TextLogo>
      <Navigation>
        <NavigationItem>
          <NavLink to="/scales" activeClassName="selected">
            Scales
          </NavLink>
        </NavigationItem>

        <NavigationItem>
          <NavLink exact to="/" activeClassName="selected">
            Chords
          </NavLink>
        </NavigationItem>

        <NavigationItem>
          <NavLink to="/test" activeClassName="selected">
            Test
          </NavLink>
        </NavigationItem>
      </Navigation>
    </NavContainer>
  );
}
