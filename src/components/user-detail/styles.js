import styled from 'styled-components';
import { colors } from '../../utils/style-global/';


export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`

export const Avatar = styled.img`
  object-fit: cover;
  height: 280px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  border-radius: 2px;
`

export const UserName = styled.label`
  color: ${colors.dark};
  font-family: Raleway;
  font-size: 2.2rem;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  margin: 0.3em 0;
`

export const UserLogin = styled.label`
  color: ${colors.primary}
  font-family: Raleway;
  font-size: 1.2rem;
  font-weight: 300px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  margin-bottom: 1em;
`
export const InfoDescription = styled.label`
  color: ${colors.primary};
  font-family: Raleway;
  font-size: 1.2rem;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
`

export const ContentInfo = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  margin: 0.2em 0;
`

export const ImgInfo = styled.img`
  width: 30px;
  position: relative;
  left: -4px;
  object-fit: scale-down;

`
