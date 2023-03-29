import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

function Hero() {
  return (
    <>
      {/* <div className='hero__background'> */}
      <div className='hero'>
        <div className='hero__container'>
          <div className='hero__img-wrap'>
            <img src='/src/assets/yogagirl.png' alt='/' className='hero__img' />
          </div>
          <div className='hero__text-container'>
            <h1>קאתרין</h1>
            <p>להרגיש בבית</p>
            <p>להתמלא בעוצמה</p>
          </div>
          <div className='hero__buttons-container'>
            <Link to='/' className='hero__button'>
              לפרטים נוספים <FaWhatsapp className='hero__button-icon' />
            </Link>
            <Link to='/' className='hero__button'>
              חייגו אלינו <FaPhoneAlt className='hero__button-icon' />
            </Link>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Hero;
