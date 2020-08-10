import React from "react";
import styled from "styled-components";

//footer component that will be used in all screens
//it will imported by DefaultTemplate
const FooterWrapper = styled.footer`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  padding: 1% 2%;
  background-color: var(--dk-color);
  border-top: 1px solid var(--blue);
  color: var(--white);
  font-size: 0.75em;

  @media (max-width: 800px) {
    display: block;
  }
`;

const ContentItem = styled.div`
  flex: 1 0 350px;
  margin: 5px;
  line-height: 18px;
`;

function Footer() {
  return (
    <FooterWrapper>
      <ContentItem>
        <h4>WHO IS THAT GIRL?</h4>
        <p>
          Attempt to leap between furniture but woefully miscalibrate and
          bellyflop onto the floor; what's your problem?
        </p>
      </ContentItem>
      <ContentItem>
        <h4>RESOURCES</h4>
        <ul>
          <li><a href="https://www.alura.com.br/">Alura</a></li>
          <li><a href="https://www.youtube.com/channel/UCqrILQNl5Ed9Dz6CGMyvMTQ">Clever Programmer</a></li>
          <li><a href="https://firebase.google.com/">Firebase</a></li>
          <li>
            <a href="flatuicolors.com/">Flat UI Colors</a>
          </li>
          <li>
            <a href="http://lorempixel.com/">Lorem Pixel</a>
          </li>
          <li>
            <a href="http://www.catipsum.com/">Cat Ipsum</a>
          </li>
          <li>
            <a href="https://www.canva.com/">Canvas</a>
          </li>
          <li>
            <a href="https://www.themoviedb.org/">TMDb</a>
          </li>
        </ul>
      </ContentItem>
      <ContentItem className="last-item-footer">
        <h4>FOLLOW ME</h4>
        <p>
          Scratch stare out the window lick butt and make a weird face but murr
          i hate humans they are so annoying yet damn that dog.
        </p>
      </ContentItem>
      <hr />
      <ContentItem>
        <h5>
          Copyright &copy; 2020 Developed by Jennifer Magpantay using HTML5,
          CSS3 & React&nbsp;&nbsp;|&nbsp;&nbsp;Imersao React Alura&nbsp;&nbsp;|&nbsp;&nbsp;Clever Programmer
        </h5>
      </ContentItem>
      </FooterWrapper>
  );
}

export default Footer;
