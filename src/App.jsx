import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import WhatsappButton from "./Components/WhatsappButton/WhatsappButton";
import Studio from "./Components/Content/Studio/Studio";
import FAQ from "./Components/Content/FAQ/FAQ";

function App() {
  return (
    <>
      <Router>
        <WhatsappButton />
        <Navbar />
        <Hero />
        <Studio />
        <FAQ />
      </Router>
    </>
  );
}

export default App;
