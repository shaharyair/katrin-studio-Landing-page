import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import WhatsappButton from "./Components/WhatsappButton/WhatsappButton";
import Execrises from "./Components/Content/Execrises/Execrises";
import Studio from "./Components/Content/Studio/Studio";

function App() {
  return (
    <>
      <Router>
        <WhatsappButton />
        <Navbar />
        <Hero />
        <Studio />
        {/* <Execrises /> */}
        <Routes>
          <Route to='/' />
        </Routes>
      </Router>
    </>
  );
}

export default App;
