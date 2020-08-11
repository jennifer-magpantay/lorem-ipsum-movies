import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";

//navbar component that will appear in all screens
//it will be imported by DefaultTemplate
//{ Link } has been added to keep the SPA properties
const NavWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  align-items: center;
  padding: 1% 2%;
  justify-content: space-between;
  background-color: var(--black); 
  `;

const LogoImage = styled.img`
 width: 80%;
 
 @media (max-width:800px){
   width: 60%;
 }
`;

const LinkNav = styled.div`
 color: var(--lg-color);
  font-weight: 500;
`;

class NavBar extends React.Component {
  render() {
    return (
      <NavWrapper>
        <Link to="/">
          <LogoImage src={Logo} alt="logo" />
        </Link>
        <LinkNav>
          <ul>
            <li>
              <Link to="/screens/home">HOME </Link>
            </li>
            <li>
              <Link to="/screens/article">ADD ARTICLE </Link>
            </li>
            <li>
              <Link to="/screens/category">ADD CATEGORY </Link>
            </li>
            <li> | </li>
            <li>
              <Link to="/screens/home">LOG IN</Link>
            </li>
          </ul>
        </LinkNav>
      </NavWrapper>
    );
  }
}

export default NavBar;
