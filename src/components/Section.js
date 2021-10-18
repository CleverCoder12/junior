import React from "react";
import styled from "styled-components";
import Creations from "./Creations";

function Section() {
  return (
    <Container>
      <Header>
        <HeaderLeft>Our Creations</HeaderLeft>{" "}
        <HeaderRight>See All</HeaderRight>
      </Header>
      <ImageContainer>
        <Creations
          Title="Deep Earth"
          SmallImage="mobile/image-deep-earth.jpg"
          LargeImage="desktop/image-deep-earth.jpg"
        />
        <Creations
          Title="Night Arcade"
          SmallImage="mobile/image-night-arcade.jpg"
          LargeImage="desktop/image-night-arcade.jpg"
        />
        <Creations
          Title="Soccer Team VR"
          SmallImage="mobile/image-soccer-team.jpg"
          LargeImage="desktop/image-soccer-team.jpg"
        />
        <Creations
          Title="The Grid"
          SmallImage="mobile/image-grid.jpg"
          LargeImage="desktop/image-grid.jpg"
        />
        <Creations
          Title="fROM up Above Vr"
          SmallImage="mobile/image-from-above.jpg"
          LargeImage="desktop/image-from-above.jpg"
        />
        <Creations
          Title="Pocket Borealis"
          SmallImage="mobile/image-pocket-borealis.jpg"
          LargeImage="desktop/image-pocket-borealis.jpg"
        />
        <Creations
          Title="The Curiosity"
          SmallImage="mobile/image-curiosity.jpg"
          LargeImage="desktop/image-curiosity.jpg"
        />
        <Creations
          Title="Make it fisheye"
          SmallImage="mobile/image-fisheye.jpg"
          LargeImage="desktop/image-fisheye.jpg"
        />
      </ImageContainer>
    </Container>
  );
}

export default Section;

const Container = styled.div`
  max-width: 1130px;
  margin: 40px auto;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
`;

const HeaderLeft = styled.div`
  font-size: 30px;
  font-weight: 500;
  font-family: "Josefin Sans";
  display: flex;
  justify-content: center;
  width: 100%;
  @media (min-width: 900px) {
    width: auto;
    display: flex;
    justify-content: flex-start;
  }
`;

const HeaderRight = styled.button`
  display: none;
  opacity: 0;
  @media (min-width: 900px) {
    display: inline;
    opacity: 1;
    padding: 15px 40px;
    background-color: white;
    border: none;
    border: 1.5px solid black;
    text-transform: uppercase;
    border-radius: 4px;
    letter-spacing: 3px;
    font-weight: bolder;
    cursor: pointer;
    transition: all 200ms ease-in-out;
    &:hover {
      background-color: black;
      color: white;
    }
  }
`;

const ImageContainer = styled.div`
  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
`;
