import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

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
          <Link to='/Home' className='navbar__logo' onClick={closeMobileMenu}>
            <img src='/src/assets/logo.png' alt='img' />
            {/* Katrin. */}
          </Link>
          <div className='navbar__menu-mobile-icon' onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "navbar__menu mobile" : "navbar__menu"}>
            <li className='navbar__item'>
              <Link
                to='/Home'
                className='navbar__link'
                onClick={closeMobileMenu}
              >
                בית
              </Link>
            </li>
            <li className='navbar__item'>
              <Link
                to='/Plans'
                className='navbar__link'
                onClick={closeMobileMenu}
              >
                תוכניות
              </Link>
            </li>
            <li className='navbar__item'>
              <Link
                to='/Contact'
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
