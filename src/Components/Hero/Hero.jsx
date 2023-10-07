import React from "react";
import "./Hero.css";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import katrinAndLina from "../../assets/KatrinPhotos/KatrinAndLina.png";

function Hero() {
  return (
    <>
      <div className='hero' id='hero'>
        <div className='hero__container'>
          <div className='hero__img-wrap'>
            <img src={katrinAndLina} alt='/' />
          </div>
          <div className='hero__text-container'>
            <div className='hero__text-head'>
              <h1>
                הסטודיו של <span>קאתרין</span>
              </h1>
            </div>
            <div className='hero__text'>
              <p>תזונה</p>
              <p>אימונים</p>
              <p>תוצאות</p>
            </div>
            <p>אין סיבה שלא תצליחי</p>
            <div className='hero__buttons-container'>
              <a href='https://wa.me/972556620441' className='hero__button'>
                גם ב Whatsapp <FaWhatsapp className='hero__button-icon' />
              </a>
              <a href='tel:+972556620441' className='hero__button'>
                חייגי אליי <FaPhoneAlt className='hero__button-icon' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
