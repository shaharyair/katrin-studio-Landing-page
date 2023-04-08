import React from "react";
import "./Footer.css";
import ScrollLinkNav from "./ScrollLinkNav";

function Footer() {
  return (
    <>
      <div className='footer'>
        <div className='footer__container'>
          <nav className='footer__nav'>
            <ul>
              <li className='nav__item'>
                <ScrollLinkNav content='ראשי' id='hero' className='nav__link' />
              </li>
              <li className='nav__item'>
                <ScrollLinkNav
                  content='הסטודיו'
                  id='studio'
                  className='nav__link'
                />
              </li>
            </ul>
          </nav>
          <ScrollLinkNav
            content={
              <img
                src='/src/assets/logo-no-circle.png'
                alt='/'
                className='nav__img'
              />
            }
            id='hero'
            className='nav__link'
          />
        </div>
      </div>
    </>
  );
}

export default Footer;
