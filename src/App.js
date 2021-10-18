import styled from "styled-components";
import Footer from "./components/Footer";
import Game from "./components/Game";
import Home from "./components/Home";
import Section from "./components/Section";

function App() {
  return (
    <Container>
      <Home />
      <Game />
      <Section />
      <Footer />
    </Container>
  );
}

export default App;

const Container = styled.div``;
