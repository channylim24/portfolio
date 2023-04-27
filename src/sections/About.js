import React from "react";
import styled from "styled-components";

import largestPhoto from "../assets/Images/photo2.jpeg";
import smallRightPhoto from "../assets/Images/photo3.jpg";
import smallLeftPhoto from "../assets/Images/photo4.jpg";

const Section = styled.section`
  position: relative;
  min-height: fit-content;
  width: 80vw;
  padding-bottom: 2rem;
  display: flex;

  margin: 0 auto;

  @media (max-width: 48em) {
    width: 90vw;
  }

  @media (max-width: 30em) {
    width: 100vw;
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;

  @media (max-width: 64em) {
    font-size: ${(props) => `calc(${props.theme.fontxxxl} - 5vw)`};
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxxxl};
  }
`;

const SubTitle = styled.h2`
  font-size: ${(props) => props.theme.fontxl};
  font-weight: 300;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontsm};
    font-weight: 600;
  }
`;

const Left = styled.div`
  width: 50%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: relative;
  z-index: 5;
  margin-top: 15%;

  @media (max-width: 64em) {
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    margin: 0 auto;

    padding: 2rem;
    font-weight: 600;
    font-size: ${(props) => props.theme.fontxs};

    backdrop-filter: blur(5px);
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 20px;
    color: ${(props) => props.theme.text};
  }

  @media (max-width: 48em) {
    top: 60%;
  }

  @media (max-width: 30em) {
    width: 70%;
  }
`;

const Right = styled.div`
  width: 50%;
  position: relative;

  img {
    width: 100%;
    height: auto;
  }

  .small-img-1 {
    width: 40%;
    position: absolute;
    right: 80%;
    bottom: 10%;
  }

  .small-img-2 {
    width: 40%;
    position: absolute;
    left: 80%;
    bottom: 30%;
  }

  @media (max-width: 64em) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 100vh;
      object-fit: cover;
    }

    .small-img-1 {
      width: 30%;
      height: auto;
      left: 5%;
      bottom: 10%;
    }

    .small-img-2 {
      width: 30%;
      height: auto;
      left: 60%;
      bottom: 20%;
    }
  }
`;

function About() {
  return (
    <Section id="fixed-target" className="about">
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        About Me
      </Title>
      <Left>
        <SubTitle>Who am I?</SubTitle>
        I'm currently pursuing a higher degree in Information Technology at
        Cyber University of Asia. I also completed a 4-month Front End
        Development intensive course at Glints Academy, where my team's final
        project was selected as the best in the program.
        <SubTitle>What's the story behind my passion?</SubTitle>I had little to
        no knowledge in IT-related fields before. I started programming out of
        curiosity and to keep myself busy during my spare time. At first,
        programming seemed like magic to me, but the more I learned, the more it
        made sense, and the more my interest in coding grew. That's why I keep
        improving myself in this field.
        <SubTitle>What's my aim?</SubTitle>
        <mark>
          I have big dreams, and I care deeply about my family's and everyone's
          future.
        </mark>
        <br />I used to be a loser with no motivation in life, but I decided to
        make a change. Many people out there are still struggling, and some have
        experienced worse things than I have. That's why I have several goals in
        my life, such as having a stable career in the next 5 to 10 years,
        attending one of the world's prestigious universities to build a
        professional network in the next 4 to 5 years, starting my own business
        after gaining lots of experience, and eventually sharing free learning
        resources with and provide funds for those in need.
      </Left>
      <Right>
        <img src={largestPhoto} alt="About" />
        <img
          data-scroll
          data-scroll-speed="10"
          src={smallLeftPhoto}
          className="small-img-1"
          alt="About"
        />
        <img
          data-scroll
          data-scroll-speed="-2"
          src={smallRightPhoto}
          className="small-img-2"
          alt="About"
        />
      </Right>
    </Section>
  );
}

export default About;
