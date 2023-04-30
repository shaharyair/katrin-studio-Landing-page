import React, { useState, useEffect } from "react";
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
import AboutKatrin from "./Components/AboutKatrin/AboutKatrin";
import BeforeAndAfter from "./Components/BeforeAndAfter/BeforeAndAfter";
import Recipes from "./Components/Recipes/Recipes";
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen />}
      <Navbar />
      <Hero />
      <Benefits />
      <Studio />
      <Recipes />
      <BeforeAndAfter />
      <Reviews />
      <AboutKatrin />
      <FAQ />
      <SignupForm />
      <Footer />
      <WhatsappButton />
    </>
  );
}

export default App;
