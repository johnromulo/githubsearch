import styled from 'styled-components';
import { colors } from '../../utils/style-global/';

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 1em 0em;

  @media only screen and (max-width: 768px){
    flex-direction: column;
  }
`

export const TextNotFound = styled.label`
  color: ${colors.secodary};

  font-family: Raleway;
  font-size: 2.2rem;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  margin: 2em auto;
`