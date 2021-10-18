import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Game() {
  const [Width, setWidth] = useState(false);
  const Screen = window.screen.width;
  useEffect(() => {
    if (Screen >= 762) {
      setWidth(true);
    } else {
      setWidth(false);
    }
  }, [Screen]);

  return (
    <Container>
      <ImageContainer>
        <Background>
          {Width ? (
            <img src="./images/desktop/image-interactive.jpg" alt="random" />
          ) : (
            <img src="./images/mobile/image-interactive.jpg" alt="random" />
          )}
        </Background>
        <Stuff>
          <Make>
            <h1>The Leader in interactive vr </h1>
            <p>
              Founded in 2011, Loopstudios has been producing world-cass virtual
              reality projects for some of the best companies around the globe.
              Our award-winning creations have transformed businesses through
              digital experiences that bind to their band{" "}
            </p>
          </Make>
        </Stuff>
      </ImageContainer>
    </Container>
  );
}

export default Game;

const Container = styled.div`
  background: white;
  margin-top: 40px;
`;
const ImageContainer = styled.div`
  @media (min-width: 960px) {
    display: flex;
    margin: 0 auto;
    max-width: 1130px;
    flex-direction: row;
  }
  display: flex;
  flex-direction: column;
`;
const Stuff = styled.div`
  @media (min-width: 960px) {
    width: 600px;
    height: 400px;
    background-color: #fff;
    margin-top: 170px;
    margin-left: -136px;
  }

  margin: 0 auto;
`;

const Background = styled.div`
  @media (min-width: 960px) {
    width: 600px;
    max-height: 300px;
    img {
      object-fit: contain;
      width: 100%;
    }
  }

  width: 350px;
  img {
    object-fit: contain;
    width: 100%;
  }
  margin: 0 auto;
`;

const Make = styled.div`
  margin: 40px;
  h1 {
    text-transform: uppercase;
    font-size: 30px;
    font-family: "Josefin Sans";
    width: 300px;
    margin: 0 auto;
    margin-bottom: 35px;
  }
  p {
    width: 400px;
    font-weight: bold;
    color: DarkGray;
    font-family: "Alata";
    margin: 0 auto;
  }
  @media (min-width: 960px) {
    h1 {
      margin-bottom: 60px;
      text-transform: uppercase;
      font-family: "Josefin Sans";
    }
    p {
      width: 430px;
      font-weight: bold;
      color: DarkGray;
      font-family: "Alata";
    }
  }
`;
