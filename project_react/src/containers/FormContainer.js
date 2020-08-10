import styled from "styled-components";

//container to hold form, applied on AddCategory & AddArticle
const FormContainer = styled.div`
  width: 98%;
  padding: 2%;
  margin-top: 8%;
  background-color: var(--white);
  border: 1px solid var(--lg-gray);

  @media (max-width: 800px) {
    width: 100%;
    margin-top: 0;
  }
`;

export default FormContainer;
