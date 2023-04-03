import React from "react";
import "./WhatsappButton.css";
import { FaWhatsapp } from "react-icons/fa";

function WhatsappButton() {
  return (
    <>
      <div className='button__circle'>
        <a href='https://wa.me/972556620441'>
          <FaWhatsapp className='button' />
        </a>
      </div>
    </>
  );
}

export default WhatsappButton;
