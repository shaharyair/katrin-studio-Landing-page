import React from "react";
import "./Footer.css";
import { Link as ScrollLink } from "react-scroll";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
  return (
    <>
      <div className='footer'>
        <div className='footer__container'>
          <div className='footer__nav'>
            <h1 className='footer-title'>תפריט ניווט</h1>
            <nav>
              <ul>
                <li>
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
                <li>
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
                <li>
                  <ScrollLink
                    to='faq'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className='footer__nav-link'
                  >
                    שאלות נפצות
                  </ScrollLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className='footer-info'>
            <h1 className='footer-title'>ליצירת קשר</h1>
            <ul>
              <li className='footer-info-item'>055-6520441</li>
              <li className='footer-info-item'>הגלבוע 41, עפולה</li>
              <li className='footer-info-item'>
                <AiOutlineMail className='footer-icon' />
                katrinyair@gmail.com
              </li>
            </ul>
          </div>

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
