import styled from 'styled-components';

//component to use fro naming the categories
//it will be imported by Row
const SectionLabel = styled.h4`
text-align: left;
color: var(--blue);

@media (max-width:800px){
    font-size: 12px;
   }
`;

export default SectionLabel;


