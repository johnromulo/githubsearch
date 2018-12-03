import styled from 'styled-components';
import { colors } from '../../utils/style-global/';

const fontSize = '4rem';
const fontSizeMobile = '2rem';

export const Wrapper = styled.section`
  background-color: ${colors.light}
  width: fit-content;
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
  font-family: 'Raleway-ExtraLightItalic', sans-serif;
  font-weight: 200;
  font-style: italic;
  margin-left: 0.1em;
`;
