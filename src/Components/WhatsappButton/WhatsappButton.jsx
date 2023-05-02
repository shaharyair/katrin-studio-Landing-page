import React from "react";
import "./WhatsappButton.css";
import { FaWhatsapp } from "react-icons/fa";

function WhatsappButton() {
  return (
    <>
      <a href='https://wa.me/972556620441'>
        <div className='button-circle'>
          <FaWhatsapp className='button' />
        </div>
      </a>
    </>
  );
}

export default WhatsappButton;
