import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background-color: ${({ theme }) => theme.background || "#fff"};
  border-bottom: 1px solid ${({ theme }) => theme.border || "#eee"};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: inherit;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-weight: 500;
  &:hover {
    opacity: 0.7;
  }
`;

export default function Navbar({ darkMode, setDarkMode, ThemeToggleComponent }) {
  return (
    <Nav>
      <Logo to="/">MyBlog</Logo>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blogs">Blogs</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        {ThemeToggleComponent && (
          <ThemeToggleComponent darkMode={darkMode} setDarkMode={setDarkMode} />
        )}
      </NavLinks>
    </Nav>
  );
}