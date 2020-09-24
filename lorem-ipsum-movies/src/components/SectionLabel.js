import styled from 'styled-components';

//component to use for naming the categories - it will be imported by Row
const SectionLabel = styled.h5`
color: var(--blue);
font-weight: bold;
letter-spacing: 0.1em;
text-align: left;

@media (max-width: 800px) {
    font-size: 14px;
}
`;

export default SectionLabel;


