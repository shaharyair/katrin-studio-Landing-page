import React from "react";
import "./LoadingScreen.css";
import logoCircle from "../../assets/Logo/logo-circle.png";

function LoadingScreen(props) {
  return (
    <div className={`loading-screen ${props.addClassName}`}>
      <img src={logoCircle} alt={logoCircle} />
      <div className='loading-spinner' />
    </div>
  );
}

export default LoadingScreen;
