import React from "react";
import "./Footer.css";
import { Link as ScrollLink } from "react-scroll";

function Footer() {
  return (
    <>
      <div className='footer'>
        <div className='footer__container'>
          <nav className='footer__nav'>
            <ul>
              <li className='footer__nav-item'>
                <ScrollLink
                  to='hero'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className='footer__nav-link'
                >
                  ראשי
                </ScrollLink>
              </li>
              <li className='footer__nav-item'>
                <ScrollLink
                  to='studio'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className='footer__nav-link'
                >
                  הסטודיו
                </ScrollLink>
              </li>
            </ul>
          </nav>
          <ScrollLink
            to='hero'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className='footer__nav-logo'
          >
            <img src='/src/assets/logo-no-circle.png' alt='img' />
          </ScrollLink>
        </div>
      </div>
    </>
  );
}

export default Footer;
