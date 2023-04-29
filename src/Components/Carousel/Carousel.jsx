import { React, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css"; // Import custom styles
import reviews1 from "/src/assets/Whatsapp Reviews/1.png";
import reviews2 from "/src/assets/Whatsapp Reviews/2.png";
import reviews3 from "/src/assets/Whatsapp Reviews/3.png";
import reviews4 from "/src/assets/Whatsapp Reviews/4.png";
import reviews5 from "/src/assets/Whatsapp Reviews/5.png";
import reviews6 from "/src/assets/Whatsapp Reviews/6.png";

const Carousel = () => {
  const [slidesToShow, setSlidesToShow] = useState(2);

  const carouselSettings = {
    infinite: true,
    speed: 1000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  };

  const handleResize = () => {
    if (window.innerWidth <= 1024) {
      setSlidesToShow(1);
    } else {
      setSlidesToShow(2);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const images = [
    { url: reviews1 },
    { url: reviews2 },
    { url: reviews3 },
    { url: reviews4 },
    { url: reviews5 },
    { url: reviews6 },
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
