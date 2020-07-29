import styled from "styled-components";

export const LogoImage = styled.img`
  width: 200px;

  @media (max-width: 800px) {
    width: 100px;
  }
`;

export const MenuWrapper = styled.nav`
  width: 100%;
  height: 94px;

  display: flex;
  position: fixed;
  top: 0;

  align-items: center;
  justify-content: space-between; 
  padding: 2%;

  background-color: var(--bc-color);
  border-bottom: 1px solid var(--color-dk);

  @media (max-width: 800px) {
    width: 100px;
    height: 40px;
    justify-content: center;
  }
`;

