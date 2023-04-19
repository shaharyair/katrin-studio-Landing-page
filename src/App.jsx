import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import WhatsappButton from "./Components/WhatsappButton/WhatsappButton";
import Studio from "./Components/Studio/Studio";
import FAQ from "./Components/FAQ/FAQ";
import Benefits from "./Components/Benefits/Benefits";
import SignupForm from "./Components/SignupForm/SignupForm";
import Footer from "./Components/Footer/Footer";
import Reviews from "./Components/Reviews/Reviews";
import Carousel from "./Components/Carousel/Carousel";
import BeforeAndAfter from "./Components/BeforeAndAfter/BeforeAndAfter";

function App() {
  return (
    <>
      <WhatsappButton />
      <Navbar />
      <Hero />
      <Benefits />
      <BeforeAndAfter />
      <Studio />
      <FAQ />
      <Reviews />
      <SignupForm />
      <Footer />
    </>
  );
}

export default App;
