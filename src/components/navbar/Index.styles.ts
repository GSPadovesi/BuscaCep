import styled from 'styled-components';

export const Navbar = styled.nav`
  background-color: #757575;
  position: fixed;
  top: 0;
  overflow: hidden;
  width: 100%;
  height: 100px;
  z-index: 1;
  border-bottom: 2px solid #000000;
  padding: 12px;
`;

export const NavbarContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 32px;
`

export const Image = styled.img`
  width: 80px;
  height: 80px;
`

export const Title = styled.h1`
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  font-family: Arial, Helvetica, sans-serif;
  
  @media (min-width: 768px) {
    font-size: 24px;
  }

  @media (min-width: 1024px) {
    font-size: 32px;
  }
`