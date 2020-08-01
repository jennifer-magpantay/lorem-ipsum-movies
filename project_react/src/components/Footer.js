import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  width: 100%;
  height: auto;
  padding: 1%;
  background-color: var(--dk-color);
  color: white;
  font-size: 12px;
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
`;

function Footer() {
  return (
    <FooterWrapper>
      <Content>
        <p>
          Attempt to leap between furniture but woefully miscalibrate and
          bellyflop onto the floor; what's your problem?
        </p>
        <p>
          i meant to do that now i shall wash myself intently freak human out
          make funny noise mow mow mow mow mow mow success now attack human
          missing until dinner time.
        </p>
        <p>
          Scratch stare out the window lick butt and make a weird face but murr
          i hate humans they are so annoying yet damn that dog.
        </p>
      </Content>
      <hr />
      <p>
        Copyright &copy; 2020 Developed by Jennifer Magpantay using HTML5, CSS3
        & React | Imersao React Alura
      </p>
    </FooterWrapper>
  );
}

export default Footer;
