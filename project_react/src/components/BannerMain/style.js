import styled from "styled-components";

export const BannerWrapper = styled.section `
width: 100%;
height: 80vh;
background-color: var(--bc-color);
color: var(--black);

@media (max-width: 800px){
    height: auto;
    height: 50vh;
}
`;