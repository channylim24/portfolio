import { useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useForm, ValidationError } from "@formspree/react";

const Section = styled.section`
  min-height: 100vh;
  margin: 0 auto;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  /* background-color: yellow; */
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  text-shadow: 1px 1px 1px ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  position: absolute;
  top: 1rem;
  left: 55%;
  z-index: 11;
  white-space: nowrap;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxxl};
    left: 80%;
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontxl};
    left: 110%;
  }
`;

const Container = styled.div`
  width: 50vw;
  padding: 2rem;
  margin-top: 5rem;
  /* width: 65%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-shadow: 0 0 0 5vw ${(props) => props.theme.text};
  border: 3px solid ${(props) => props.theme.body};

  @media (max-width: 70em) {
    margin-top: 0rem;
  }

  .success-message {
    text-align: center;
    font-weight: bold;
    color: green;
    margin-bottom: 2rem;
  }

  form {
    width: 100%;

    input {
      width: 100%;
      padding: 0.5rem;
      box-sizing: border-box;
    }

    textarea {
      display: block;
      width: 100%;
      padding: 0.5rem;
      height: 5rem;
      box-sizing: border-box;
      margin-bottom: 1rem;
    }

    button {
      all: unset;
      background-color: black;
      color: ${(props) => props.theme.text};
      width: 100%;
      text-align: center;
      padding: 0.5rem;
      box-sizing: border-box;
      cursor: pointer;
      border-radius: 4px;
    }
  }

  @media (max-width: 64em) {
    width: 30vw;
  }

  @media (max-width: 48em) {
    width: 40vw;
  }

  @media (max-width: 30em) {
    width: 60vw;
  }
`;

function Contact() {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  const [state, handleSubmit] = useForm("mlekakkq");

  return (
    <Section ref={ref} id="contact">
      <Title
        data-scroll
        data-scroll-speed="10"
        data-scroll-direction="horizontal"
      >
        Contact Me
      </Title>

      <Container>
        {state.succeeded ? (
          <p className="success-message">
            Thank you for submitting your message. I will get back to you
            shortly!
          </p>
        ) : (
          ""
        )}
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" name="name" />
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>
            Send
          </button>
        </form>
      </Container>
    </Section>
  );
}

export default Contact;
