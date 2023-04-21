import React from "react";
import "./WhatsappButton.css";
import { FaWhatsapp } from "react-icons/fa";

function WhatsappButton() {
  return (
    <>
      <a href='https://wa.me/972556620441'>
        <FaWhatsapp className='button' />
      </a>
    </>
  );
}

export default WhatsappButton;
