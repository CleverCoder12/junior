import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <Wrapper>
        <TopSection>
          <ImageContainer>
            <img src="./images/logo.svg" alt="logo" />
          </ImageContainer>
          <SocialMedia>
            <a href="facebook.com">
              <img src="./images/icon-facebook.svg" alt="facebook" />
            </a>
            <a href="twitter.com">
              <img src="./images/icon-twitter.svg" alt="twitter" />
            </a>
            <a href="pinterest.com">
              <img src="./images/icon-pinterest.svg" alt="pin" />
            </a>
            <a href="instagram.com">
              <img src="./images/icon-instagram.svg" alt="insta" />
            </a>
          </SocialMedia>
        </TopSection>
        <BottomSection>
          <NavList>
            <a href="/">About</a>
            <a href="/">Careers</a>
            <a href="/">Events</a>
            <a href="/">Products</a>
            <a href="/">Support</a>
          </NavList>
          <CopyRight>
            <p>@ 2021 Loopstudios. All rights reserved</p>
          </CopyRight>
        </BottomSection>
      </Wrapper>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  background-color: black;
`;
const TopSection = styled.div`
  @media (min-width: 900px) {
    margin-top: 40px;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  }
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 30px;

  a {
    margin: 0 10px;
  }
`;
const BottomSection = styled.div`
  padding-bottom: 40px;
  @media (min-width: 900px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  max-width: 1230px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  cursor: pointer;
  margin-bottom: 30px;
  img {
    object-fit: contain;
  }
`;
const NavList = styled.div`
  @media screen and (min-width: 900px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  a {
    font-size: 18px;
    display: flex;
    flex-direction: column;

    margin: 20px 20px;
    position: relative;
    font-family: "Alata";

    font-weight: 400;

    &:after {
      content: "";
      height: 2px;
      background-color: white;
      position: absolute;
      left: 0;
      right: 0;
      bottom: -6px;
      opacity: 0;
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      transform: scaleX(0);
      transform-origin: center;
    }
    &:hover {
      &:after {
        opacity: 1;
        transform: scaleX(1);
      }
    }
    .active {
      &:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const SocialMedia = styled.div``;

const CopyRight = styled.div`
  color: DarkGray;
  font-family: "Alata";
  font-size: 15px;
`;
