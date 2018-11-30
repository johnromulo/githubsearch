import styled from 'styled-components';
import { colors } from '../../utils/style-global/';


export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`

export const Title = styled.label`
  color: ${colors.secodary};
  font-family: Raleway;
  font-size: 2.2rem;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
`
export const Description = styled.p`
  color: ${colors.dark}
  font-family: Raleway;
  font-size: 1.2rem;
  font-weight: 300px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  margin: 0;
`
export const StarNumber = styled.label`
  color: ${colors.primary};
  font-family: Raleway;
  font-size: 1.2rem;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
`

export const ContentStar = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  margin: 1em 0;
`

export const Img = styled.img`
  width: 1.5rem;
  position: relative;
  left: -4px;
`
