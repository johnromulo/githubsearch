import styled from 'styled-components';
import { colors } from '../../utils/style-global/';

export const Wrapper = styled.section`
display: flex;
flex-direction: row;
align-items: center;
width: ${props => props.widthWrapper || '100%'};
justify-content: ${props => props.justifyContent || 'center'};
`;

export const Input = styled.input`
background: ${colors.light};
padding: 0.5em;
border: none;
border-radius: 1px;
box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
width: ${props => props.widthInput || '60%'} ;
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
