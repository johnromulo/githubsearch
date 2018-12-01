import styled from 'styled-components';
import { colors } from '../../utils/style-global/';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.light}
  width: 100%;
  height: 100vh;
`;

export const ContentLogo = styled.section`
  margin: 1em;
`

export const ContentSearch = styled.section`
  margin-bottom: 8em;
  width: 80%;
  display:flex;
  justify-content: center;
  align-items: center;
`
