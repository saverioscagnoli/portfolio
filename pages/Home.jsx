import React from "react";
import { Container } from "@chakra-ui/react";
import Bio from "../src/components/Bio";
import Header from "../src/components/Header";
import Work from "../src/components/Work";
import Ilove from "../src/components/Ilove";
import Social from "../src/components/Social";
import AnimatedPage from "../src/AnimatedPage";

function Home() {
  return (
    <Container>
      <AnimatedPage>
        <Header />
        <Work />
        <Bio />
        <Ilove />
        <Social />
      </AnimatedPage>
    </Container>
  );
}

export default Home;
