import React from "react";
import { useState } from "react";
import { Container, Wrapper, ButtonGeneral } from "../shared";
import {
  Covering,
  Сhallenge,
  ModalConteiner,
  ModalContent,
  Title,
  Description,
  Learning,
  Сiphertext,
  Eye,
  Сiphereye,
  Sidebar,
  Section,
  Heading,
  Subtitle,
  List,
  Hidebutton,
  Fasterbutton,
} from "./elements";

const blocks = [
  {
    id: 1,
    section: "section",
    title: "Abstract",
    subtitle:
      "Cognitive load theory (CLT) is mainly concerned with the learning of complex cognitive tasks",
  },
  {
    id: 2,
    section: "section",
    title: "Overview Of The Papers",
    subtitle:
      "Cognitive load theory (CLT; Paas, Renkl and Sweller 2003; Sweller 1988, 1999) is mainly concerned with the learning of complex cognitive tasks",
  },
];

function Summaries() {
  const [modalActive, setModalActive] = useState(false);

  function sendEmail() {
    setModalActive(false);
  }

  return (
    <Container background="#202020">
      <Covering align="none" padding="0" justify="none" wrap="wrap">
        <Сhallenge>
          <ModalConteiner
            opacity={modalActive ? "1" : "0"}
            pointer={modalActive ? "all" : "none"}
            onClick={sendEmail}
          >
            <ModalContent
              transform={modalActive ? "scale(1)" : "scale(0.5)"}
              onClick={(e) => e.stopPropagation()}
            >
              <Sidebar>
                <Сiphertext></Сiphertext>
                <Сiphereye>
                  <Eye></Eye>
                </Сiphereye>
              </Sidebar>
              <List>
                <Hidebutton onClick={sendEmail}></Hidebutton>
                {blocks.map((item, id) => (
                  <div key={item.id}>
                    <Section>{item.section}</Section>
                    <Heading>{item.title}</Heading>
                    <Subtitle>{item.subtitle}</Subtitle>
                  </div>
                ))}
              </List>
            </ModalContent>
          </ModalConteiner>
          <Fasterbutton margin="0 220px" onClick={() => setModalActive(true)}>
            {" "}
            Let`s read{" "}
          </Fasterbutton>
        </Сhallenge>

        <Learning>
          <Title>
            &#123; In short &#125; , read <Fasterbutton>faster</Fasterbutton>
          </Title>
          <Description>
            Our automatically generated summaries guarantee you read only what
            you need.
          </Description>
          <ButtonGeneral>Start learning</ButtonGeneral>
        </Learning>
      </Covering>
    </Container>
  );
}

export default Summaries;
