import styled from 'styled-components';
import { colors } from '../../assets/colors';

const fontSize = '4rem';

export const Wrapper = styled.section`
display: flex;
flex-direction: row;
align-items: center;
background-color: ${colors.light}
width: fit-content;
margin: 0.5em;
`;

export const TextGit = styled.section`
display: inline-block;
font-family: 'Monaco', sans-serif;
font-size: ${fontSize}
color: ${colors.primary}

@media only screen and (max-width: 768px){
  font-size: 2rem;
}
`;

export const TextSearch = styled(TextGit)`
display: inline-block;
font-family: 'Raleway', sans-serif;
font-weight: 200;
font-style: italic;
margin-left: 0.1em
`;
