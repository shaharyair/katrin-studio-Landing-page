import React from "react";
import { Link } from "react-scroll/modules";

const ScrollLinkNav = ({ content, id, className, onClick }) => {
  const handleClick = onClick ? onClick : undefined;

  return (
    <Link
      to={id}
      className={className}
      onClick={handleClick}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
    >
      {content}
    </Link>
  );
};

export default ScrollLinkNav;
