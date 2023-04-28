import React from "react";
import "./Navbar.css";
import NavbarLinks from "./NavbarLinks";
import logoNoCircle from "/src/assets/Logo/logo-no-circle.png";
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

  // closing mobile menu whenever navbar__link class name is being clicked
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

  // closing mobile menu whenever the window width is larger then 1024px
  const handleResizeMobileMenu = () => {
    if (window.innerWidth > 1024) {
      setClick(false);
    }
  };
  window.addEventListener("resize", handleResizeMobileMenu);

  // setting classNames for navbarLinks
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
            <img src={logoNoCircle} alt='img' />
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
          <ul className={click ? "navbar__menu navbar-mobile" : "navbar__menu"}>
            <NavbarLinks navbarLinks={navbarLinks} />
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
