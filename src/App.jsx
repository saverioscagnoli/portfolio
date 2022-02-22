import Navbar from "./components/Navbar";
import Naps from "./components/Naps";
import './style.css'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../pages/home";
import Works from "../pages/Works";



function App() {
  return (
    <Router>
      <Navbar />
      <Naps />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/works' element={<Works />} />
    </Routes>
    </Router>
    
  );
}

export default App
