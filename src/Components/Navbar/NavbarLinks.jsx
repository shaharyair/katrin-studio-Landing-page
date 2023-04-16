import React from "react";
import { Link as ScrollLink } from "react-scroll";

const NavbarLinks = (props) => {
  return (
    <>
      <li>
        <ScrollLink
          to='hero'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={`${props.navbarLinks.link} ${props.navbarLinks.main}`}
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
          className={props.navbarLinks.link}
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
          className={props.navbarLinks.link}
        >
          שאלות נפצות
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to='studio'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={props.navbarLinks.link}
        >
          מנפצת המיתוסים
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to='studio'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={props.navbarLinks.link}
        >
          צור קשר
        </ScrollLink>
      </li>
    </>
  );
};

export default NavbarLinks;
