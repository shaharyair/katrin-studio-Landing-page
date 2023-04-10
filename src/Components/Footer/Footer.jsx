import React from "react";
import "./Footer.css";
import { Link as ScrollLink } from "react-scroll";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineEnvironment,
} from "react-icons/ai";

function Footer() {
  return (
    <>
      <div className='footer'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3360.971896296625!2d35.2969758!3d32.6069324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151c53dc1c5e032b%3A0xfebf8b74b01f092a!2z16fXlNeZ15zXqiDXpteZ15XXnyAxOSwg16LXpNeV15zXlA!5e0!3m2!1siw!2sil!4v1681122125541!5m2!1siw!2sil'
          allowfullscreen=''
          loading='lazy'
          referrerpolicy='no-referrer-when-downgrade'
        />
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
              <li>
                <a href='tel:+972556620441' className='footer-info-item'>
                  <AiOutlinePhone className='footer-icon' />
                  055-6520441
                </a>
              </li>
              <li>
                <a
                  href='https://goo.gl/maps/Z1RZrTYnAC3bbpKbA'
                  className='footer-info-item'
                >
                  <AiOutlineEnvironment className='footer-icon' />
                  קהילת ציון 19, עפולה
                </a>
              </li>
              <li>
                <a
                  href='mailto:katrinyair@gmail.com'
                  className='footer-info-item'
                >
                  <AiOutlineMail className='footer-icon' />
                  katrinyair@gmail.com
                </a>
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
