import React from "react";
import "./Footer.css";
import NavbarLinks from "../Navbar/NavbarLinks";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineEnvironment,
} from "react-icons/ai";

// setting className for navbarLinks
function Footer() {
  const navbarLinks = {
    link: "footer__nav-link",
  };

  return (
    <>
      <div className='footer'>
        <div className='footer__container'>
          <div className='footer__nav'>
            <h1 className='footer-title'>תפריט ניווט</h1>
            <hr />
            <ul>
              <NavbarLinks navbarLinks={navbarLinks} />
            </ul>
          </div>
          <div className='footer-info'>
            <h1 className='footer-title'>ליצירת קשר</h1>
            <hr />
            <ul>
              <li>
                <a href='tel:+972556620441' className='footer-info-item'>
                  <AiOutlinePhone className='footer-icon' />
                  055-6620441
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
        </div>
      </div>
    </>
  );
}

export default Footer;
