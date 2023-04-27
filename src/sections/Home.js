import React from "react";
import styled from "styled-components";
import Cover from "../components/Cover";
import Logo from "../components/Logo";
import NavBar from "../components/NavBar";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`;

function Home() {
  return (
    <Section id="home">
      <Cover />
      <Logo />
      <NavBar />
    </Section>
  );
}

export default Home;
