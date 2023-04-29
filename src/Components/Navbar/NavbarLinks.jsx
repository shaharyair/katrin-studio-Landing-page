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
          // offset={-70}
          duration={1000}
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
          // offset={-70}
          duration={1000}
          className={props.navbarLinks.link}
        >
          הסטודיו
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to='beforeandafter'
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
          className={props.navbarLinks.link}
        >
          לפני ואחרי
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to='reviews'
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
          className={props.navbarLinks.link}
        >
          מתאמנות מספרות
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to='aboutkatrin'
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
          className={props.navbarLinks.link}
        >
          קצת עליי
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to='faq-box'
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
          className={props.navbarLinks.link}
        >
          שאלות נפצות
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to='signupform'
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
          className={props.navbarLinks.link}
        >
          צור קשר
        </ScrollLink>
      </li>
    </>
  );
};

export default NavbarLinks;
