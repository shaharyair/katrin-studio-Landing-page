import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import WhatsappButton from "./Components/WhatsappButton/WhatsappButton";
import Studio from "./Components/Studio/Studio";
import FAQ from "./Components/FAQ/FAQ";
import Benefits from "./Components/Benefits/Benefits";
import ImgSlider from "./Components/ImgSlider/ImgSlider";
import SignupForm from "./Components/SignupForm/SignupForm";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <WhatsappButton />
      <Navbar />
      <Hero />
      <Benefits />
      <Studio />
      <FAQ />
      <ImgSlider />
      <SignupForm />
      <Footer />
    </>
  );
}

export default App;
