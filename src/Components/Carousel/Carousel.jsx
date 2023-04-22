import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css"; // Import custom styles

const Carousel = () => {
  const carouselSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const images = [
    { url: "/src/assets/2.png" },
    { url: "/src/assets/3.png" },
    { url: "/src/assets/4.png" },
  ];

  return (
    <div className='carousel-container'>
      <Slider {...carouselSettings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image.url}
              alt={`Slide ${index + 1}`}
              className='carousel-image'
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
