import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//FullNavBar holds all links and content of the navbar
//when loaded in full screen we will see the link of the nav bar as usual: displayed inline
//when is loaded in small screen, then it will displayed as column

const LinkNav = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  color: var(--lg-color);
  font-weight: 500;

  /*in small screens, the link/content has to be fit in sliding side column that will be active/displayed when clicked*/
  @media (max-width: 800px) {
    flex-flow: column nowrap;    
    position: fixed;
    padding: 2% 2% 2% 6%;
    top: 80px;
    right: 0;
    background-color: var(--black);
    line-height: 50px;
    opacity: 0.9;
    text-align: right;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.5s ease-in-out;

    /*the demiliter will disappear in small screen */
    .delimiter {
      display: none;
    }
  }
`;

function NavBarContent({ open }) {
  return (
    <LinkNav open={open}>
      <li>
        <Link to="/home">HOME </Link>
      </li>
      <li className="delimiter"> | </li>
      <li>
        <Link to="/home">SIGN UP</Link>
      </li>
      <li>
        <Link to="/home">LOG IN</Link>
      </li>
    </LinkNav>
  );
}

export default NavBarContent;
