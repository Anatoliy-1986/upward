import styled from "styled-components";
import { device } from "../../config/device";
import {Wrapper} from "../shared";

export const Concerning = styled(Wrapper)`
  @media ${device.tablet} {
    padding: 0 15px;
  }
  @media ${device.mobile} {
    padding: 0 15px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

export const Link = styled.a`
  padding-right: 29px;
  font-size: 20px;
  text-align: center;
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  @media ${device.mobile} {
    margin: 10px 0;
  }
`;

export const Button = styled.button`
  width: 172px;
  height: 62px;
  font-size: 20px;
  color: white;
  background-color: transparent;
  border-radius: 4px;
  border: 1px solid white;
  text-decoration: none;
  cursor: pointer;
  @media ${device.tablet} {
    margin: 15px 15px;
  }
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  margin: 72px 0 90px;
  max-width: 418px;
`;

export const Title = styled.div`
  font-size: 20px;
  text-transform: uppercase;
  color: #ffffff;
  margin: 0;
  letter-spacing: 0.1em;
`;

export const SubTitle = styled.div`
  font-size: 61px;
  color: #ffffff;
  margin: 20px 0 0;
`;

export const Description = styled.div`
  font-size: 16px;
  color: #ffffff;
  margin: 20px 0 0;
  opacity: 0.7;
`;

export const Line = styled.div`
  border-bottom: 1px solid #ffffff;
  max-width: 418px;
  margin-top: 20px;
`;

export const Navigetion = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 43px 0 0;
  box-sizing: border-box;
`;

export const Image = styled.img`
  position: absolute;
  top: 47px;
  left: 525px;
  box-sizing: border-box;
  @media ${device.mobile} {
    display: none;
  }
`;