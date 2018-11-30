import styled from 'styled-components';
import { colors } from '../../utils/style-global/';

const fontSize = '4rem';
const fontSizeMobile = '2rem';

export const Wrapper = styled.section`
display: flex;
flex-direction: row;
align-items: center;
background-color: ${colors.light}
width: fit-content;
margin: ${props => props.margin || '0.5em'} ;
font-size: ${props => props.fontSize || fontSize}
`;

export const TextGit = styled.section`
display: inline-block;
font-family: 'Monaco', sans-serif;
color: ${colors.dark}

@media only screen and (max-width: 768px){
  font-size: ${fontSizeMobile}
}
`;

export const TextSearch = styled(TextGit)`
display: inline-block;
font-family: 'Raleway', sans-serif;
font-weight: 200;
font-style: italic;
margin-left: 0.1em
`;
