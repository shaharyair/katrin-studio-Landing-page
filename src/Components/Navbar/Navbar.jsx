import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "../Hero/Hero";
import "../Content/Studio/Studio";
import "../Content/FAQ/FAQ";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaWhatsappSquare,
  FaPhoneSquareAlt,
} from "react-icons/fa";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  const handleResizeMobileMenu = () => {
    if (window.innerWidth > 1024) {
      setClick(false);
    }
  };

  window.addEventListener("resize", handleResizeMobileMenu);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar__box'>
          <ScrollLink
            to='hero'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className='navbar__logo'
            onClick={closeMobileMenu}
          >
            <img src='/src/assets/logo-no-circle.png' alt='img' />
          </ScrollLink>
          <div className='navbar__social-icons'>
            <Link
              to='https://wa.me/972556620441'
              className='navbar__social-link'
            >
              <FaWhatsappSquare />
            </Link>
            <Link
              to='https://www.instagram.com/katrinyair/'
              className='navbar__social-link'
            >
              <FaInstagramSquare />
            </Link>
            <Link
              to='https://www.facebook.com/katrin.yair'
              className='navbar__social-link'
            >
              <FaFacebookSquare />
            </Link>
            <Link to='tel:+972556620441' className='navbar__social-link'>
              <FaPhoneSquareAlt />
            </Link>
          </div>
          <div className='navbar__menu-mobile-icon' onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "navbar__menu mobile" : "navbar__menu"}>
            <li className='navbar__item'>
              <ScrollLink
                to='hero'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className='navbar__link link__main'
                onClick={closeMobileMenu}
              >
                ראשי
              </ScrollLink>
            </li>
            <li className='navbar__item'>
              <ScrollLink
                to='studio'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className='navbar__link'
                onClick={closeMobileMenu}
              >
                הסטודיו
              </ScrollLink>
            </li>
            <li className='navbar__item'>
              <ScrollLink
                to='studio'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className='navbar__link'
                onClick={closeMobileMenu}
              >
                שיטת אימון
              </ScrollLink>
            </li>
            <li className='navbar__item'>
              <ScrollLink
                to='faq'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className='navbar__link'
                onClick={closeMobileMenu}
              >
                שאלות נפצות
              </ScrollLink>
            </li>
            <li className='navbar__item'>
              <ScrollLink
                to='studio'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className='navbar__link'
                onClick={closeMobileMenu}
              >
                מנפצת המיתוסים
              </ScrollLink>
            </li>
            <li className='navbar__item'>
              <ScrollLink
                to='studio'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className='navbar__link'
                onClick={closeMobileMenu}
              >
                צור קשר
              </ScrollLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
