import React, { useState } from "react";
import styled from "styled-components";

function Header() {
  const [burger, setBurger] = useState(false);

  return (
    <Container>
      <Wrapper>
        <Logo>
          <img src="./images/Logo.svg" alt="logo" />
        </Logo>
        <NavList>
          <a href="#">About</a>
          <a href="#">Careers</a>
          <a href="#">Events</a>
          <a href="#">Products</a>
          <a href="#">Support</a>
        </NavList>
        <Burger>
          {!burger ? (
            <img
              src="./images/icon-hamburger.svg"
              alt="Menu"
              onClick={() => setBurger(true)}
            />
          ) : (
            <img
              src="./images/icon-close.svg"
              alt="Close"
              onClick={() => setBurger(false)}
            />
          )}
        </Burger>
      </Wrapper>
      <Background show={burger}>
        <List>
          <a href="#">About</a>
          <a href="#">Careers</a>
          <a href="#">Events</a>
          <a href="#">Products</a>
          <a href="#">Support</a>
        </List>
      </Background>
    </Container>
  );
}

export default Header;

const Container = styled.div``;
const Logo = styled.div`
  img {
    cursor: pointer;
  }
  z-index: 9999;
`;

const NavList = styled.div`
  a {
    display: none;
    @media (min-width: 1040px) {
      display: inline;
      margin: 0 20px;
      font-family: "Alata";
      font-weight: 400;
      position: relative;

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
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 20px;
  padding: 15px 0;
  padding-top: 30px;
`;
const Burger = styled.div`
  img {
    cursor: pointer;
    display: inline;
    opacity: 1;
  }
  z-index: 9999;
  display: flex;
  @media (min-width: 1040px) {
    display: none;
    img {
      display: none;
      opacity: 0;
    }
  }
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100vw;
  z-index: 999;
  background-color: black;
  transform: translateX();
  transform: ${(props) =>
    props.show ? `translateX(0%)` : `translateX(1000%)`};
  transition: transform 200ms ease-in-out 0s;
  overflow-y: ${(props) => (props.show ? `hidden` : `scroll`)};
  @media (min-width: 1040px) {
    transition: 200ms ease-in;
    transform: translateX(100%);
  }
`;

const List = styled.div`
  color: white;
  margin-top: 220px;
  margin-left: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  a {
    transition: transform 300ms ease-in-out;
    margin: 10px 30px;
    font-family: "Josefin Sans";
    font-weight: 300;
    font-size: 24px;
    text-transform: uppercase;
    color: darkgray;
    letter-spacing: 1.5px;
  }
`;
