import styled from 'styled-components';
import { colors } from '../../assets/colors';

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center
align-items: center;
background-color: ${colors.backgrond_primary}
width: 100%;
height: 100vh;
`;

export const Content = styled.section`
margin-bottom: 8em;
width: 100%
`
