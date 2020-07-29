import React from "react";

//import components
import Logo from "../../assets/images/logo-12.svg";
import Button from "../Button/index";
import { LogoImage, MenuWrapper } from "./style";

function MenuNav() {
  return (
    <MenuWrapper>
      <a href="/">
        <LogoImage src={Logo} alt="Logo LOGOIPSUM" />
      </a>
      <Button as="a" href="/">
        + NEW VIDEO
      </Button>
    </MenuWrapper>
  );
}

export default MenuNav;
