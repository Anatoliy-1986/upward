import styled from "styled-components";
import { device } from "../../config/device";


export const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;
  border: 1px solid #202020;
  background: #fffdf8;
  @media ${device.tablet} {
    border: 1px solid #202020;
    justify-content: center;
  }
`;

export const Link = styled.a`
  border-left: 1px solid #202020;
  flex-grow: 1;
  padding: 18px 45px;
  font-size: 17px;
  font-weight: bold;
  letter-spacing: 0.27px;
  line-height: 25px;
  color: #222222;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  @media ${device.tablet} {
    display: block;
    text-align: center;
    line-height: 60px;
    border: 1px solid #202020;
    flex-grow: 0;
    padding: 0;
    margin: 15px 15px;
    width: 157px;
    height: 60px;
  }
`;

export const Button = styled.button<{ secondary?: boolean }>`
  width: 157px;
  height: 60px;
  font-size: 16px;
  font-weight: bold;
  line-height: 25px;
  color: #202020;
  letter-spacing: 0.27px;
  background-color: ${(props) => (props.secondary ? "transparent" : "#B8A4FD")};
  border-radius: 0px;
  border: none;
  border-left: 1px solid #202020;
  text-decoration: none;
  cursor: pointer;
  @media ${device.tablet} {
    margin: 15px 15px;
    border: 1px solid #202020;
  }
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 546px;
  padding: 45px 0 96px;
  @media ${device.mobile} {
    padding: 0 15px;
  }
`;

export const Title = styled.div`
  font-family: Roboto;
  font-size: 110px;
  line-height: 110px;
  color: #202020;
  margin-bottom: 24px;
  @media ${device.tablet} {
    font-size: 80px;
    line-height: 80px;
  }
`;

export const Description = styled.div`
  max-width: 353px;
  font-size: 16px;
  line-height: 25px;
  letter-spacing: 0.27px;
  color: #202020;
  margin-bottom: 61px;
`;

export const Image = styled.img`
  padding: 0 36px 0 50px;
  box-sizing: border-box;
`;

export const Publication = styled.div`
  display: flex;
  max-width: 780px;
  border: 1px solid #202020;
  border-radius: 10px;
  margin-top: 67px;
  @media ${device.tablet} {
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  border-right: 1px solid black;
  @media ${device.tablet} {
    border-left: 1px solid black;
  }
`;

export const Expert = styled.div`
  padding: 20px;
  background-color: #cfc;
`;

export const Modules = styled.div`
  display: flex;
`;

export const Block = styled.div`
  flex-grow: 1;
  border-top: 1px solid #202020;
  border-bottom: 1px solid #202020;
  border-right: 1px solid #202020;
  &:last-child {
    border-right: none;
  }
`;

export const Heading = styled.div`
  font-size: 22px;
  font-weight: bold;
  padding: 10px 10px 0;
`;

export const Subtitle = styled.div<{
  secondary?: boolean;
  background?: string;
}>`
  font-size: 12px;
  text-transform: ${(props) => (props.secondary ? "uppercase" : "none")};
  background-color: ${({ background }) => background || "inherit"};
  opacity: 0.5;
  padding: 10px;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Parameters = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;
export const Parameter = styled.div`
  font-size: 17px;
  padding: 10px;
  border-bottom: 1px solid black;
  cursor: pointer;
  &: hover {
    background-color: #e2dbfb;
    transform: scale(1.1);
  }
  &:last-child {
    border-bottom: none;
  }
`;

export const Article = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media ${device.tablet} {
    border-left: none;
  }
`;

export const Processing = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 600px;
  border-bottom: 1px solid #202020;
  padding: 25px 15px;
  @media ${device.tablet} {
    border-bottom: none;
  }
`;

export const Buttonprocessing = styled.button`
  width: 100px;
  height: 40px;
  font-size: 16px;
  color: black;
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid black;
  text-decoration: none;
  margin: 10px 0;
  cursor: pointer;
  &: hover {
    box-shadow: inset 2px 2px 5px #000000, 1px 1px 5px #000000;
    color: white;
    background-color: black;
    transform: scale(1.1);
  }
`;

export const Recording = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  @media ${device.tablet} {
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

export const Range = styled.input`
-webkit-appearance: none;
width: 220px;
  height: 2px;
  background: #D3D3D3;
outline: none;
margin: 0 10px;
cursor: pointer;
&::-webkit-slider-thumb {
    .thumb();
 -webkit-appearance: none;
 background:black;
 width: 10px;
  height: 10px;
  border-radius: 50%;
  cursor: pointer;
  }
`;

export const Label = styled.label`
  padding: 5px 20px;
  border: 1px solid #202020;
  border-radius: 10em/10em;
  margin: 0 15px;
`;

export const Raise = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  border: 1px solid #202020;
  border-radius: 5px;
  margin: 0;
  @media ${device.tablet} {
    margin: 15px 0;
  }
`;

export const Percent = styled.span`
  font-size: 18px;
  margin-right: 20px;
`;

export const Percentbutton = styled.button`
  border: 1px solid #202020;
  border-radius: 50px;

  background-color: transparent;
  margin: 5px;
  border: 1px solid black;
  text-decoration: none;

  cursor: pointer;
`;

export const Theory = styled.div`
  border: 1px solid #202020;
  max-width: 450px;
  max-height: 335px;
  padding: 30px;
  border-radius: 20px 20px 0 0;
  border-bottom: none;
  overflow: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;
