import styled from 'styled-components';
import { colors } from '../../assets/colors';

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
background-color: ${colors.backgrond_primary}
width: 100%;
padding: 1em 1.5em;
`;

export const Header = styled.section`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100%;

@media only screen and (max-width: 768px){
  flex-direction: column;
}
`

export const Content = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100%;
padding: 1em 0em;

@media only screen and (max-width: 768px){
  flex-direction: column;
}
`
export const SectionDatail = styled.section`
background-color: red;
width: 280px;
height: 30px;
@media only screen and (max-width: 768px){
  width: 100%;
}
`

export const SectionListRepo = styled.section`
background-color: black;
width: 68%;
height: 30px;
@media only screen and (max-width: 768px){
  width: 100%;
}
`
