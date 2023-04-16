import React from "react";
import { useState, useRef, useEffect } from "react";
import "./ImgSlider.css";
import { FaAngleLeft, FaAngleRight, FaCircle } from "react-icons/fa";

const imgs = [
  { url: "/src/assets/benefits1.jpg" },
  { url: "/src/assets/benefits2.jpg" },
  { url: "/src/assets/benefits3.jpg" },
  { url: "/src/assets/benefits4.jpg" },
];

function ImgSlider() {
  const [imgIndex, setImgIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = imgIndex === 0;
    const newIndex = isFirstSlide ? imgs.length - 1 : imgIndex - 1;
    setImgIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = imgIndex === imgs.length - 1;
    const newIndex = isLastSlide ? 0 : imgIndex + 1;
    setImgIndex(newIndex);
  };

  const goToIndex = (imgIndex) => {
    setImgIndex(imgIndex);
  };

  // sets a sliderwidth to 340 and changes the sliderwidth depends on the window size
  const [sliderWidth, setSliderWidth] = useState(340);

  const changeSliderWidth = () => {
    if (window.innerWidth >= 1024) {
      setSliderWidth(550);
    } else if (window.innerWidth >= 768) {
      setSliderWidth(440);
    } else {
      setSliderWidth(340);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      changeSliderWidth();
    };

    window.addEventListener("resize", handleResize);

    changeSliderWidth();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className='slider-box'>
        <div className='slider-box-container'>
          <div
            className='slider-container-overflow'
            style={{ width: `${sliderWidth}px` }}
          >
            <div
              className='slider-container'
              style={{
                width: `${sliderWidth * imgs.length}px`,
                transform: `translateX(${-imgIndex * sliderWidth}px)`,
              }}
            >
              {imgs.map((img, i) => (
                <div
                  className='slider'
                  key={i}
                  style={{
                    backgroundImage: `url(${imgs[i].url})`,
                    width: `${sliderWidth}px`,
                  }}
                />
              ))}
            </div>
          </div>
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
