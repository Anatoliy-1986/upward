import React from "react";
import { useState } from "react";
import { Container, ButtonGeneral } from "../shared";
import {
  Covering,
  Title,
  Description,
  Learning,
  Experience,
  Yourcontent,
  Sidebar,
  Burger,
  Cross,
  Rectangle,
  Filling,
  ModalContent,
  Strip,
} from "./elements";

function Transform() {
  const [modalActive, setModalActive] = useState(!true);

  function sendModal() {
    setModalActive(false);
  }

  return (
    <Container>
      <Covering>
        <Learning>
          <Title>We’ll read the text *for you*</Title>
          <Description>
            Whether you learn better by listening or on the move, Upword has
            your back. Our text-to-speech engine automatically transforms text
            to audio, making it easy to consume and comprehend.
          </Description>
          <ButtonGeneral>Start learning</ButtonGeneral>
        </Learning>
        <Experience>
          <Yourcontent>
            <Sidebar>
              <Burger onClick={() => setModalActive(!modalActive)}>
                <Strip></Strip>
                <Strip></Strip>
                <Strip></Strip>
                <Strip></Strip>
              </Burger>
              <Rectangle></Rectangle>
            </Sidebar>
            <Filling>
              Transform your content into an interactive learning experience
            </Filling>
            <ModalContent
              transform={modalActive ? "scale(1)" : "scale(0.5)"}
              opacity={modalActive ? "1" : "0"}
            >
              Audio <Cross onClick={sendModal}></Cross>
            </ModalContent>
          </Yourcontent>
        </Experience>
      </Covering>
    </Container>
  );
}

export default Transform;
