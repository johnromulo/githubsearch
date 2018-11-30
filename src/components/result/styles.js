import styled from 'styled-components';
import { colors } from '../../utils/style-global/';

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
  justify-content: center;
  align-items: center;
  width: 100%;

  @media only screen and (max-width: 768px){
    flex-direction: column;
  }
`
export const LogoContent = styled.div`
  margin-right:4.5em;
  @media only screen and (max-width: 768px){
    margin-right:0
  }
`

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
export const SectionDatail = styled.section`
  background-color: red;
  width: 280px;
  height: 30px;
  margin-right:4.5em;
  @media only screen and (max-width: 768px){
    width: 100%;
    margin-right:0
  }
`

export const SectionListRepo = styled.section`
  width: 68%;
  @media only screen and (max-width: 768px){
    width: 100%;
  }
`

export const WrapperSearch = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 68%;
  justify-content: flex-end;
  @media only screen and (max-width: 768px){
    width: 100%;
    margin-top: 1em;
  }
`;

export const Input = styled.input`
  background: ${colors.light};
  padding: 0.5em;
  border: none;
  border-radius: 1px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  width: 100% ;
  height: 20px;
  font-family: Raleway;
  font-size: 20px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;

  @media only screen and (max-width: 768px){
    height: 15px;
  }
`;

export const Button = styled.button`
  color: ${colors.light};
  background-color: ${colors.secodary};
  font-size: 1em;
  border-radius: 1px;
  border: none;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  height: 42px;
  width: 7%;
  min-width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px){
    height: 37px;
  }
`;

export const Img = styled.img`
  width: 35px;
`;

