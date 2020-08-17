import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import Menu from './Menu';

//navbar component that will appear in all screens - it will be imported by DefaultTemplate
//{ Link } has been added to keep the SPA properties
//add to the navbar a responsive menu

const NavWrapper = styled.nav`
  display: flex;
  width: 100%;
  height: 100px;
  padding: 1% 2%;
  position: fixed;
  top: 0;
  align-items: center;  
  justify-content: space-between;
  background-color: var(--black);
  z-index: 1;
`;

const LogoImage = styled.img`
  width: 80%;

  @media (max-width: 800px) {
    width: 60%;
  }
`;

class NavBar extends React.Component {
  render() {
    return (
      <NavWrapper>
        <Link to="/">
          <LogoImage src={Logo} alt="logo" />
        </Link>
        <Menu />
      </NavWrapper>
    );
  }
}

export default NavBar;
