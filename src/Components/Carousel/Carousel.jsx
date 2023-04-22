import { React, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css"; // Import custom styles

const Carousel = () => {
  const [slidesToShow, setSlidesToShow] = useState(2);

  const carouselSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };

  const handleResize = () => {
    if (window.innerWidth < 1024) {
      setSlidesToShow(1);
    } else {
      setSlidesToShow(2);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
