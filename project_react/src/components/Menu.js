import React, { useState } from "react";
import styled from "styled-components";
import NavBarContent from "./NavBarContent";

const MenuWrapper = styled.div``;

//the menu icon will be set as display  none for full screens
//it will displayed just when the screen are small them 800px
const MenuStyled = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 35px;
  right: 20px;
  z-index: 20;

  /* the div MenuIcon will define the menu design (burger) 
  * it has to be declared inside the main div, otherwise, it wont work because of its DOM structure
  * apply the open state to control de transitions of the menu icon*/
    .menuIcon {
  width: 2rem;
  height: 0.25rem;  
  background-color: ${({ open }) => (open ? "var(--dk-gray)" : 'var(--white)')};
  border-radius: 10px;
  transform-origin: 1px;
  transition: all 0.3s linear;

   /* each div/child represents a line of the burguer menu
   * when is clicked, it will be 'opened', it will rotate its children, changing its design to X*/
  &:nth-child(1) {
    transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
  }
  &:nth-child(2) {
    transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
    opacity: ${({ open }) => (open ? 0 : 1)};
  }
  &:nth-child(3) {
    transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
  }

/*the menu icon will disappear when it is displayed in full screen*/
  @media (min-width: 800px) {
    display: none;
  }
}
`;

function Menu() {
  const [open, setOpen] = useState(false)
  
  return (
    <MenuWrapper>
      <MenuStyled open={open} onClick={() => setOpen(!open)}>
        <div className="menuIcon" />
        <div className="menuIcon"/>
        <div className="menuIcon"/>
      </MenuStyled>
      <NavBarContent open={open} />
    </MenuWrapper>
  );
}

export default Menu;
