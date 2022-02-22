import Navbar from "./components/Navbar";
import Naps from "./components/Naps";
import './style.css'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Works from "../pages/Works";
import Downgrade from "../pages/Downgrade";
import { VStack } from "@chakra-ui/react";
import Lalartu from "../pages/Lalartu";
import AnimatedPage from "./AnimatedPage";
import { AnimatePresence } from "framer-motion";



function App() {
  return (
    <AnimatedPage>
      <AnimatePresence>
    <VStack>
    <Router>
      <Navbar />
      <Naps />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/works' element={<Works />} />
      <Route path='/project-downgrade' element={<Downgrade />} />
      <Route path='/lalartu' element={<Lalartu />} />

    </Routes>
    </Router>
    </VStack>
    </AnimatePresence>
    </AnimatedPage>
  );
}

export default App
