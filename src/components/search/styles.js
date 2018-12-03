import styled from 'styled-components';
import { colors } from '../../utils/style-global/';

export const Wrapper = styled.form`
  display: flex;
  width: 100%;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
`;

export const Input = styled.input`
  background: ${colors.light};
  padding: 0.5em;
  border: none;
  border-radius: 1px;
  width: 100%;
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
  &:focus{
    outline: ${colors.light} auto 5px;
  }
`;

export const Button = styled.button`
  color: ${colors.light};
  background-color: ${colors.secodary};
  font-size: 1em;
  border-radius: 1px;
  border: none;
  cursor: pointer;
  height: 42px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media only screen and (max-width: 768px){
    height: 37px;
  }

  &:hover {
    background-color: ${colors.secodaryDark}
  }

  &:after {
    content: '';
    background-color: ${colors.secodary};
    border-radius: 3px;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: scale(0.001, 0.001);
    opacity: 0.7;
  }
  &:active:after {
    animation: effect 0.2s ease-out;
  }
  &:focus {
    outline: 0;
  }
  @keyframes effect {
    50% {
      transform: scale(3.5, 3.5);
      opacity: 0;
    }
    99% {
      transform: scale(0.001, 0.001);
      opacity: 0;
    }
    100% {
      transform: scale(0.001, 0.001);
      opacity: 0.7;
    }
  }
`;

export const Img = styled.img`
  width: 35px;
`;
