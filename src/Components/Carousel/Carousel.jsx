import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css"; // Import custom styles

const Carousel = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = [
    { url: "/src/assets/benefits1.jpg" },
    { url: "/src/assets/benefits2.jpg" },
    { url: "/src/assets/benefits3.jpg" },
    { url: "/src/assets/benefits4.jpg" },
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
