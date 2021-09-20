import styled from "styled-components";
import { device } from "../../config/device";
import { Wrapper } from "../shared";

export const Covering = styled(Wrapper)`
  @media ${device.tablet} {
    justify-content: center;
    align-items: center;
  } ;
`;

export const Сhallenge = styled.div`
  max-width: 720px;
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #fffdf8;
  @media ${device.tablet} {
    border: none;
  }
`;

export const ModalConteiner = styled.div<{ opacity?: any; pointer?: string }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #202020;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.5s;
  opacity: ${({ opacity }) => opacity};
  pointer-events: ${({ pointer }) => pointer};
`;

export const ModalContent = styled.div<{ transform?: string }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 2;
  padding: 0;
  border-radius: 12px;
  background-color: #fffdf8;
  transform: ${({ transform }) => transform};
  transition: 0.4s all;
  @media ${device.tablet} {
    flex-wrap: wrap;
  }
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 90px;
  height: 100%;
  margin: 0;
  border-right: 1px solid black;
  @media ${device.tablet} {
    display: none;
  }
`;

export const Сiphertext = styled.div`
  width: 90px;
  height: 220px;
  background: #bddefd;
  border-radius: 12px 0 0 0;
  border-bottom: 1px solid black;
`;

export const Сiphereye = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 90px;
`;

export const Eye = styled.div`
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;
  background: currentColor;
  border-radius: 70% 0 / 70%;
  transform: rotate(45deg);
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 20%;
    left: 20%;
    width: 60%;
    height: 60%;
    background: #fff;
    border-radius: 100%;
  }
  &::after {
    width: 30%;
    height: 30%;
    top: 35%;
    left: 35%;
    background: inherit;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
  position: relative;
  box-sizing: border-box;
`;

export const Hidebutton = styled.div`
  cursor: pointer;
  width: 24px;
  height: 24px;
  position: absolute;
  box-sizing: border-box;
  z-index: 1;
  top: 0;
  left: 250px;
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 10px;
    width: 24px;
    height: 2px;
    background: black;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
  @media ${device.mobile} {
    left: 150px;
  }
`;

export const Section = styled.div`
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 15px;
  opacity: 0.5;
`;

export const Heading = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 15px;
  border-bottom: 1px solid black;
`;

export const Subtitle = styled.div`
  font-size: 12px;
  padding: 0px;
  max-width: 270px;
  margin-bottom: 15px;
`;

export const Learning = styled.div`
  display: flex;
  flex-direction: column;
  width: 325px;
  padding: 59px 49px;
  @media ${device.mobile} {
    padding: 0 15px;
    justify-content: center;
    align-items: center;
  }
`;

export const Title = styled.div`
  font-family: Roboto;
  font-size: 56px;
  line-height: 78px;
  color: #fffdf8;
  margin-bottom: 28px;
  @media ${device.tablet} {
    text-align: center;
  }
`;

export const Fasterbutton = styled.button<{ margin?: any }>`
  border: 1px solid #fffdf8;
  border-radius: 8px;
  font-size: 46px;
  line-height: 78px;
  color: #fffdf8;
  background-color: transparent;
  padding: 0 10px;
  text-decoration: none;
  cursor: pointer;
  margin: ${({ margin }) => margin};
  @media ${device.tablet} {
    margin: 15px 0;
  }
`;

export const Description = styled.div`
  max-width: 353px;
  font-size: 16px;
  line-height: 25px;
  letter-spacing: 0.27px;
  color: #fffdf8;
  margin-bottom: 112px;
`;
