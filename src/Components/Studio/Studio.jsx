import { React, useState } from "react";
import "./Studio.css";
import ScrollTrigger from "react-scroll-trigger";
import studioPng from "/src/assets/StudioPhotos/studio3.png";

function Studio() {
  const [isVisible, setIsVisible] = useState(false);

  const handleEnter = () => {
    setIsVisible(true);
  };

  return (
    <>
      <div className='studio' id='studio'>
        <ScrollTrigger onEnter={handleEnter}>
          <div
            className={`studio__container ${
              isVisible ? "studio-fade-bottom" : ""
            }`}
          >
            <div className='studio__text-container'>
              <h1>הסטודיו</h1>
              <p>
                צריך לכתוב Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Eligendi nulla consectetur necessitatibus nobis deleniti
                eum, modi maxime nemo cum. Labore?
              </p>
              <p>
                צריך לכתוב Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Eius doloremque dolorum ratione id impedit atque officia
                cumque ducimus beatae tempora?
              </p>
            </div>
            <img src={studioPng} alt='' />
          </div>
        </ScrollTrigger>
      </div>
    </>
  );
}

export default Studio;
