import React from "react";
import { useState, useRef } from "react";
import "./ImgSlider.css";
import { FaAngleLeft, FaAngleRight, FaCircle } from "react-icons/fa";

const imgs = [
  { url: "/src/assets/img1.jpg", title: "Lorem." },
  { url: "/src/assets/img2.jpg", title: "Lorem." },
  { url: "/src/assets/img3.jpg", title: "Lorem." },
];

function ImgSlider() {
  const [imgIndex, setImgIndex] = useState(0);
  const [direction, setDirection] = useState("");

  const sliderRef = useRef(null);

  const goToPrevious = () => {
    const isFirstSlide = imgIndex === 0;
    const newIndex = isFirstSlide ? imgs.length - 1 : imgIndex - 1;
    setImgIndex(newIndex);
    setDirection("left");
  };

  const goToNext = () => {
    const isLastSlide = imgIndex === imgs.length - 1;
    const newIndex = isLastSlide ? 0 : imgIndex + 1;
    setImgIndex(newIndex);
    setDirection("right");
  };

  const goToIndex = (imgIndex) => {
    setImgIndex(imgIndex);
    setDirection("");
  };

  return (
    <>
      <div className='slider-background'>
        <div className='slider-container'>
          <div
            className={`slider ${direction}`}
            ref={sliderRef}
            style={{ backgroundImage: `url(${imgs[imgIndex].url})` }}
          ></div>
           
          <FaAngleRight onClick={goToNext} className='arrow right' />
          <FaAngleLeft onClick={goToPrevious} className='arrow left' />
          <div className='circle-container'>
            {imgs.map((img, i) => (
              <FaCircle
                className={imgIndex === i ? "circle active" : "circle"}
                onClick={() => goToIndex(i)}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ImgSlider;
