import React from "react";
import upword from "./images/upword.png";
import { Container, ButtonGeneral } from "../shared";
import {
  Concerning,
  Header,
  Button,
  Title,
  Description,
  Information,
  Link,
  Image,
  Publication,
  Sidebar,
  Expert,
  Modules,
  Block,
  Heading,
  Subtitle,
  Article,
  List,
  Parameters,
  Parameter,
  Processing,
  Buttonprocessing,
} from "./elements";

const blocks = [
  {
    id: 1,
    number: "78",
    text: "Articles read",
  },
  {
    id: 2,
    number: "36",
    text: "Articles uploaded",
  },
];

const catalogs = [
  {
    id: 1,
    text: "Utilities",
    data: ["Search", "Starred", "To do"],
  },
  {
    id: 2,
    text: "My library",
    data: ["Home", "Shared", "Bin"],
  },
];

const buttons = [
  {
    id: 1,
    text: "Preview",
  },
  {
    id: 2,
    text: "Magic",
  },
  {
    id: 3,
    text: "Transform",
  },
  {
    id: 4,
    text: "Audio",
  },
];

function About() {
  return (
    <Container>
      <Header>
        <Image src={upword} alt="upword" />
        <Link href="#">About</Link>
        <Button secondary>Log in</Button>
        <Button>Start learning</Button>
      </Header>
      <Concerning align="none" padding="0" justify="none" wrap="wrap">
        <Information>
          <Title>Become a //super// learner</Title>
          <Description>
            Upword believes that reading efficiently is a superpower. Optimize
            your reading skills, read faster and understand what you need.
          </Description>
          <ButtonGeneral>Start learning</ButtonGeneral>
        </Information>
        <Publication>
          <Sidebar>
            <Expert>
              <Heading>Clark Kent</Heading>
              <Subtitle>Expert</Subtitle>
            </Expert>
            <Modules>
              {blocks.map((item, id) => (
                <Block key={item.id}>
                  <Heading>{item.number}</Heading>
                  <Subtitle>{item.text}</Subtitle>
                </Block>
              ))}
            </Modules>
            {catalogs.map((item, id) => (
              <List key={item.id}>
                <Subtitle background="#e2dbfb" secondary>
                  {item.text}
                </Subtitle>
                <Parameters>
                  {item.data.map((item, index) => (
                    <Parameter key={index}>{item}</Parameter>
                  ))}
                </Parameters>
              </List>
            ))}
          </Sidebar>
          <Article>
          <Processing>
          {buttons.map((item, id) => (
                <Buttonprocessing key={item.id}>
                  {item.text}
                </Buttonprocessing>
              ))}
</Processing>
            <input type="range" min="8" max="48" step="1" value="14" />
          </Article>
        </Publication>
      </Concerning>
    </Container>
  );
}

export default About;
