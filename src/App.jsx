import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Img from "./Components/Navbar/Img";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Img />
        <Hero />
        <Routes>
          <Route to='/' />
        </Routes>
      </Router>
    </>
  );
}

export default App;
