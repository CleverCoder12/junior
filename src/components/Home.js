import React from "react";
import styled from "styled-components";
import Header from "./Header";

function Home() {
  return (
    <Container>
      <Header />
      <BorderBox>
        <Width>
          <h1>
            Immersive
            <br /> experiences <br /> that deliver
          </h1>
        </Width>
      </BorderBox>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  background-color: black;
  height: 100vh;
  background-image: url("./images/mobile/image-hero.jpg");
  background-position: left right;
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 1040px) {
    background-image: url("./images/desktop/image-hero.jpg");
    background-position: center center;
  }
`;

const BorderBox = styled.div`
  @media (min-width: 1040px) {
    max-width: 1230px;
    margin: 0 auto;
    padding-top: 190px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Width = styled.div`
  @media (min-width: 862px) {
    width: 700px;
    height: 350px;
    border: 5px solid white;
  }
  @media (min-width: 1000px) {
    width: 760px;
    height: 350px;
    border: 5px solid white;
  }

  width: 410px;
  height: 170px;

  border: 5px solid white;
  position: relative;
  h1 {
    font-size: 40px;
    @media (min-width: 862px) {
      font-size: 60px;
    }
    @media (min-width: 1000px) {
      font-size: 90px;
    }

    width: 100%;
    position: absolute;
    left: 30px;
    font-family: "Josefin Sans";
    top: 30px;
    font-weight: 300;
    color: white;
    text-transform: uppercase;
    margin: 0 auto;
    margin-top: 9px;
  }
`;
