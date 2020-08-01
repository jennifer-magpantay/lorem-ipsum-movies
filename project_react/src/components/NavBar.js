import React from "react";
import styled from "styled-components";
import Logo from "../assets/images/logo-12.svg";

import { Link } from "react-router-dom";

const NavWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  align-items: center;
  padding: 0 2% 0 2%;
  justify-content: space-between;
  background-color: #c8d6e5;
  border-bottom: 0px solid var (--dk-color);
`;

const LogoImage = styled.img`
  width: 180px;
`;

const LinkNav = styled.div`
  color: var(--dk-color);
  font-weight: bold;
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
              <Link to="/">HOME </Link>
            </li>
            <li>
              <Link to="/screens/video">ADD MOVIE </Link>
            </li>
            <li>
              <Link to="/screens/category">ADD CATEGORY </Link>
            </li>
            <li> | </li>
            <li>
              <Link to="/">LOG IN</Link>
            </li>
          </ul>
        </LinkNav>
      </NavWrapper>
    );
  }
}

export default NavBar;
