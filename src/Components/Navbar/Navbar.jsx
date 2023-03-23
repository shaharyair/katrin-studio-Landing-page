import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
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
    if (window.innerWidth > 768) {
      setClick(false);
    }
  };

  window.addEventListener("resize", handleResizeMobileMenu);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar__box'>
          <Link to='/main' className='navbar__logo' onClick={closeMobileMenu}>
            <img src='/src/assets/logo-no-circle.png' alt='img' />
          </Link>
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
              <Link
                to='/main'
                className='navbar__link link__main'
                onClick={closeMobileMenu}
              >
                ראשי
              </Link>
            </li>
            <li className='navbar__item'>
              <Link
                to='/myths-breaker'
                className='navbar__link'
                onClick={closeMobileMenu}
              >
                הסטודיו
              </Link>
            </li>
            <li className='navbar__item'>
              <Link
                to='/plans'
                className='navbar__link'
                onClick={closeMobileMenu}
              >
                שיטת אימון
              </Link>
            </li>
            <li className='navbar__item'>
              <Link
                to='/myths-breaker'
                className='navbar__link'
                onClick={closeMobileMenu}
              >
                שאלות נפוצות
              </Link>
            </li>
            <li className='navbar__item'>
              <Link
                to='/myths-breaker'
                className='navbar__link'
                onClick={closeMobileMenu}
              >
                מנפצות מיתוסים
              </Link>
            </li>
            <li className='navbar__item'>
              <Link
                to='/contact'
                className='navbar__link'
                onClick={closeMobileMenu}
              >
                צור קשר
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
