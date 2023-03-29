import React from "react";
import "./WhatsappButton.css";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

function WhatsappButton() {
  return (
    <>
      <div className='button__circle'>
        <Link to='https://wa.me/972556620441'>
          <FaWhatsapp className='button' />
        </Link>
      </div>
    </>
  );
}

export default WhatsappButton;
