import styled from "styled-components";
import { device } from "../../config/device";

export const Covering = styled.div`
  display: grid;
  grid-template-areas: "Learning Experience";
  grid-template-columns: 50% 50%;
  margin: 0 auto;
  box-sizing: border-box;
  max-width: 1340px;
  @media ${device.tablet} {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  } ;
`;

export const Learning = styled.div`
  grid-area: Learning;
  display: flex;
  flex-direction: column;
  width: 434px;
  padding: 54px 0 67px;

  @media ${device.mobile} {
    padding: 0 15px;
    justify-content: center;
    align-items: center;
  }
`;

export const Title = styled.div`
  font-family: Roboto;
  font-size: 50px;
  line-height: 52px;
  margin-bottom: 39px;
  color: #202020;
  @media ${device.tablet} {
    text-align: center;
  }
`;

export const Description = styled.div`
  max-width: 434px;
  color: #202020;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.27px;
  margin-bottom: 112px;
`;

export const Experience = styled.div`
  grid-area: Experience;
  display: flex;
  flex-direction: column;
  width: 434px;
  padding: 100px 85px;
  border-left: 1px solid #202020;
  @media ${device.mobile} {
    padding: 0 15px;
    justify-content: center;
    align-items: center;
    border-left: none;
  }
`;

export const Yourcontent = styled.div<{ transform?: string }>`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 0;
  border-radius: 12px;
  background-color: #fffdf8;
  border: 1px solid #202020;
  position: relative;
  box-sizing: border-box;
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
  border-right: 1px solid #202020;
  @media ${device.tablet} {
    display: none;
  }
`;

export const Burger = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 90px;
  height: 90px;
  cursor: pointer;
  & :first-child {
    height: 20px;
  }
  & :nth-child(3) {
    height: 20px;
  }
  & :last-child {
    height: 10px;
  }
`;

export const Strip = styled.span`
  display: block;
  height: 30px;
  width: 5px;
  margin: 3px;
  background: #202020;
  border-radius: 30%;
  opacity: 1;
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
`;

export const Rectangle = styled.div`
  width: 90px;
  height: 220px;
  background: #dcffdb;
  border-radius: 0 0 0 0 12px;
  border-top: 1px solid #202020;
`;

export const Filling = styled.div`
  font-size: 22px;
  line-height: 30px;
  padding: 50px 35px;
`;

export const ModalContent = styled.div<{ transform?: string; opacity?: any }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 250px;
  left: 290px;
  z-index: 2;
  font-size: 25px;
  padding: 20px;
  border: 1px solid black;
  border-radius: 12px;
  background-color: #fffdf8;
  transform: ${({ transform }) => transform};
  opacity: ${({ opacity }) => opacity};
  transition: 0.4s all;
`;

export const Cross = styled.div`
  cursor: pointer;
  width: 25px;
  height: 25px;
  position: relative;
  box-sizing: border-box;
  margin-left: 20px;
  z-index: 1;
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 10px;
    width: 25px;
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
