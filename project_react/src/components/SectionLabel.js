import styled from 'styled-components';

//component to use fro naming the categories
//it will be imported by Row
const SectionLabel = styled.h4`
width: 250px;
padding: 12px;
text-align: center;
background-color: var(--white);
color: var(--label);
border: 1px solid var(--label);

@media (max-width:800px){
    width: 150px;
    padding: 12px;
    font-size: 12px;
   }
`;

export default SectionLabel;


