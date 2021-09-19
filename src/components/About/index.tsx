import React from "react";
import { useState } from "react";
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
  Recording,
  Range,
  Label,
  Raise,
  Percent,
  Percentbutton,
  Theory,
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

const rangeSlider = {
  max: 100,
  min: 0,
  val: 0,
};

function About() {
  const [slider, setSlider] = useState(rangeSlider);

  function onSlide(prop: string, event: any) {
    setSlider({ ...slider, ...{ [prop]: event.target.value } });
    const removeButton: any = document.querySelector(Range);
    removeButton.style.background =
      "-webkit-linear-gradient(left, black 0%, black " +
      event.target.value +
      "%, #D3D3D3 " +
      event.target.value +
      "%, #D3D3D3 100%)";
  }

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
                <Buttonprocessing key={item.id}>{item.text}</Buttonprocessing>
              ))}
              <Recording>
                {slider.val}
                <Range
                  type="range"
                  min={slider.min}
                  max={slider.max}
                  id="time"
                  step="1"
                  value={slider.val}
                  onChange={(event) => onSlide("val", event)}
                />
                {slider.max}
                <Label htmlFor="time">&#215; 1</Label>
                <Raise>
                  <Percent>175%</Percent>
                  <Percentbutton>-</Percentbutton>
                  <Percentbutton>+</Percentbutton>
                </Raise>
              </Recording>
            </Processing>
            <Theory>
              "At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus id quod
              maxime placeat facere possimus, omnis voluptas assumenda est,
              omnis dolor repellendus. Temporibus autem quibusdam et aut
              officiis debitis aut rerum necessitatibus saepe eveniet ut et
              voluptates repudiandae sint et molestiae non recusandae. Itaque
              earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
              voluptatibus maiores alias consequatur aut perferendis doloribus
              asperiores repellat." 1914 translation by H. Rackham "On the other
              hand, we denounce with righteous indignation and dislike men who
              are so beguiled and demoralized by the charms of pleasure of the
              moment, so blinded by desire, that they cannot foresee the pain
              and trouble that are bound to ensue; and equal blame belongs to
              those who fail in their duty through weakness of will, which is
              the same as saying through shrinking from toil and pain. These
              cases are perfectly simple and easy to distinguish. In a free
              hour, when our power of choice is untrammelled and when nothing
              prevents our being able to do what we like best, every pleasure is
              to be welcomed and every pain avoided. But in certain
              circumstances and owing to the claims of duty or the obligations
              of business it will frequently occur that pleasures have to be
              repudiated and annoyances accepted. The wise man therefore always
              holds in these matters to this principle of selection: he rejects
              pleasures to secure other greater pleasures, or else he endures
              pains to avoid worse pains."
            </Theory>
          </Article>
        </Publication>
      </Concerning>
    </Container>
  );
}

export default About;
