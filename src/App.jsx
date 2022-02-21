import { Container, VStack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Naps from "./components/Naps";
import Work from "./components/Work";
import './style.css'
import Bio from "./components/Bio";
import Ilove from "./components/Ilove";
import Social from "./components/Social";
import Favicon from "react-favicon";
import { useState } from "react";



function App() {
  return (
    <Container>
       <Favicon url='/favicon.gif' animated={useState(true)} />
      <Navbar />
      <Naps></Naps>
      <Header />
      <Work />
      <Bio />
      <Ilove />
      <Social />
    </Container>
  );
}

export default App
