import React from "react";
import "./Navbar.css";
import NavbarLinks from "./NavbarLinks";
import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import {
  FaBars,
  FaTimes,
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

  useEffect(() => {
    const handleScrollLinkClick = () => {
      closeMobileMenu();
    };

    const scrollLinks = document.querySelectorAll(".navbar__link");

    scrollLinks.forEach((scrollLink) => {
      scrollLink.addEventListener("click", handleScrollLinkClick);
    });

    return () => {
      scrollLinks.forEach((scrollLink) => {
        scrollLink.removeEventListener("click", handleScrollLinkClick);
      });
    };
  }, []);

  const handleResizeMobileMenu = () => {
    if (window.innerWidth > 1024) {
      setClick(false);
    }
  };
  window.addEventListener("resize", handleResizeMobileMenu);

  const navbarLinks = {
    link: "navbar__link",
    main: "navbar__link link__main",
  };

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
            <a
              href='https://wa.me/972556620441'
              className='navbar__social-link'
            >
              <FaWhatsappSquare />
            </a>
            <a
              href='https://www.instagram.com/katrinyair/'
              className='navbar__social-link'
            >
              <FaInstagramSquare />
            </a>
            <a
              href='https://www.facebook.com/katrin.yair'
              className='navbar__social-link'
            >
              <FaFacebookSquare />
            </a>
            <a href='tel:+972556620441' className='navbar__social-link'>
              <FaPhoneSquareAlt />
            </a>
          </div>
          <div className='navbar__menu-mobile-icon' onClick={handleClick}>
            {click ? (
              <FaTimes className='mobile-icon' />
            ) : (
              <FaBars className='mobile-icon' />
            )}
          </div>
          <ul className={click ? "navbar__menu mobile" : "navbar__menu"}>
            <NavbarLinks navbarLinks={navbarLinks} />
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
