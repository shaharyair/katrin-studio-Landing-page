import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import WhatsappButton from "./Components/WhatsappButton/WhatsappButton";
import Studio from "./Components/Studio/Studio";
import FAQ from "./Components/FAQ/FAQ";
import Benefits from "./Components/Benefits/Benefits";
import ImgSlider from "./Components/ImgSlider/ImgSlider";

function App() {
  return (
    <>
      <Router>
        <FAQ />
      </Router>
    </>
  );
}

export default App;
