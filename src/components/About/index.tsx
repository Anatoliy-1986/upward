import React from "react";
//import pad from "./pad.png";
//import logo from "./logo.png";
import {Container, ViewBlock} from "../shared";
import {
  Concerning,
  Header,
  Menu,
  Button,
  Title,
  SubTitle,
  Description,
  Information,
  Navigetion,
  Link,
  Line,
  Image,
} from "./elements";

//<img src={logo} alt="logo" height="43px" />

function About() {
  return (
      <Container background="linear-gradient(264.47deg, #2e43f0 29.39%, #6677ff 93.49%)">
        <Concerning direction="column" align="none" padding="50px 0 71px 0">
          <Header>
            <Menu>
              <Link href="#">Testimonial</Link>
              <Link href="#">
                Priceing
              </Link>
            </Menu>
            <Button>Get Started</Button>
          </Header>
          <ViewBlock>
            <Information>
              <Title>Inspiration Technology.</Title>
              <SubTitle>
                <strong>Runs faster.</strong> Costs less and never breaks.
              </SubTitle>
              <Line></Line>
              <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                sapien lectus sit tristique rhoncus, nisi, malesuada. Tellus
                consequat
              </Description>
              <Navigetion>
                <Button>Get Started</Button>
                <Button>Free Trail</Button>
              </Navigetion>
            </Information>
          </ViewBlock>
        </Concerning>
      </Container>
  );
}

export default About;