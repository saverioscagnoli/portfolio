import { Container, VStack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import './style.css'
import Naps from "./components/Naps";


function App() {
  return (
    <Container>
      <Navbar />
      <Naps></Naps>
      <Header />
    </Container>
  );
}

export default App
