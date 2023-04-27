import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  margin: 0 auto;
  overflow: hidden;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;
  z-index: 10;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxxl};
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Left = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  min-height: 100vh;
  z-index: 5;

  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 64em) {
    p {
      font-size: ${(props) => props.theme.fontmd};
    }
  }

  @media (max-width: 48em) {
    width: 40%;
    p {
      font-size: ${(props) => props.theme.fontsm};
    }
  }

  @media (max-width: 30em) {
    p {
      font-size: ${(props) => props.theme.fontxs};
    }
  }
`;

const Right = styled.div`
  position: absolute;
  left: 35%;
  padding-left: 50%;
  min-height: 100vh;

  background-color: ${(props) => props.theme.grey};
  /* width: 65%; */
  display: flex;
  justify-content: flex-start;
  align-items: center;

  h1 {
    width: 5rem;
    margin: 0 2rem;
  }
`;

const Item = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20rem;
  margin-right: 6rem;

  img {
    width: 100%;
    height: 480px;
    cursor: pointer;
  }

  h1 {
    display: inline-block;
    width: fit-content;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
    white-space: nowrap;
  }

  @media (max-width: 48em) {
    width: 15rem;
  }
`;

const Project = ({ img, title = "", link = "" }) => {
  return (
    <a href={link}>
      <Item
        initial={{ filter: "grayscale(100%)" }}
        whileInView={{ filter: "grayscale(0%)" }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: "all" }}
      >
        <img src={img} alt={title} />
        <h1>{title}</h1>
      </Item>
    </a>
  );
};

function Projects() {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  const horizontalRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = horizontalRef.current;

    let pinWrapWidth = scrollingElement.offsetWidth;

    let tl = gsap.timeline();

    setTimeout(() => {
      tl.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App", // Locomotive Element
          scrub: true,
          pin: true,
          // markers: true,
        },
        // increase scrolling height of section same as the scrolling element width
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none",
      });

      tl.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App", // Locomotive Element
          scrub: true,
          // markers: true,
        },
        // increase scrolling height of section same as the scrolling element width
        x: -pinWrapWidth,
        ease: "none",
      });
      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      // Clear Instances
      tl.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="projects">
      <Title data-scroll data-scroll-speed="-1">
        Projects
      </Title>
      <Left>
        <p>
          In my professional portfolio, I've provided a showcase of the projects
          I've been working on, including those from my bootcamp and
          self-learning experiences. These projects demonstrate my technical
          skills and problem-solving abilities, as well as my creativity and
          attention to detail.
        </p>
      </Left>
      <Right ref={horizontalRef}>
        <Project
          img="https://i.ibb.co/xSQd2L8/screencapture-yelp-camp-channy-vercel-app-campgrounds-2023-04-26-13-30-58.png"
          title="YelpCamp(Colt's Bootcamp)-On Going"
          link="https://yelp-camp-channy.vercel.app/campgrounds"
        />
        <Project
          img="https://i.ibb.co/R64kjPT/screencapture-channy-translator-netlify-app-2023-04-26-14-14-51-1.png"
          title="Translator"
          link="https://channy-translator.netlify.app/"
        />
        <Project
          img="https://i.ibb.co/Zmbb6FT/screencapture-channy-webtoon-kr-clone-netlify-app-2023-04-27-14-11-44.png"
          title="Webtoon Clone"
          link="https://channy-webtoon-kr-clone.netlify.app/"
        />
        <Project
          img="https://i.ibb.co/ykRdKGz/screencapture-channy-blog-post-netlify-app-2023-04-26-14-30-25.png"
          title="Blog Post"
          link="https://channy-blog-post.netlify.app/"
        />
        <Project
          img="https://i.ibb.co/gVvqVpQ/screencapture-find-your-meal-ideas-netlify-app-2023-04-27-11-05-05.png"
          title="Find Your Meal Ideas"
          link="https://find-your-meal-ideas.netlify.app/"
        />
        <Project
          img="https://i.ibb.co/T07drfY/01-Landing-Page-1.png"
          title="Studybuds(Glints Academy)"
          link="https://studybuds.netlify.app/"
        />
      </Right>
    </Section>
  );
}

export default Projects;
