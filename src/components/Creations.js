import React from "react";
import styled from "styled-components";

function Creations({ LargeImage, SmallImage, Title }) {
  return (
    <Wrapper>
      <Container show={LargeImage} small={SmallImage}>
        <Titles>{Title}</Titles>
      </Container>
    </Wrapper>
  );
}

export default Creations;

const Wrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 50px;
  @media screen and (max-width: 899px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Container = styled.div`
  width: 50vw;
  height: 55vh;

  background-image: ${(props) => `url("./images/${props.show}")`};
  background-size: cover;
  background-position: top center left;

  background-repeat: no-repeat;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  @media (min-width: 900px) {
    width: 15vw;
  }

  :hover {
    opacity: 0.4;
  }
`;

const Titles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  padding-bottom: 40px;
  padding-left: 20px;
  padding-right: 50px;
  text-transform: uppercase;
  font-size: 20px;
  padding-right: 50px;
  color: white;
  @media (min-width: 900px) {
    padding: 60px;
  }
`;
