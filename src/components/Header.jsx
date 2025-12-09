import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  position: absolute; 
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10; 
  padding: 20px 0; 
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between; 
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center; 
  }

`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-background); 
  text-decoration: none;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;

  @media (max-width: 768px) {
    display: none; 
  }
`;

const NavItem = styled.li`
  margin-left: 30px;
`;

const NavLink = styled.a`
  color: var(--color-background);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  padding-bottom: 5px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--color-secondary); 
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;


export const Header = () => {
  return (
    <HeaderWrapper>
      <NavContainer>
        <Logo href="#">João Corretor | Imóveis</Logo>
        
        <nav>
          <NavList>
            <NavItem>
              <NavLink href="#home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#features">Diferenciais</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#properties">Imóveis</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact">Contato</NavLink>
            </NavItem>
          </NavList>
        </nav>
      </NavContainer>
    </HeaderWrapper>
  );
};