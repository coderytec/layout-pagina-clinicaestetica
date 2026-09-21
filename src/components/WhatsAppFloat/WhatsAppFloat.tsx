import React from "react";
import "./whatsapp-float.css";

export const WhatsAppFloat: React.FC = () => {
  return (
    <a
      href="https://wa.me/"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float-btn"
      aria-label="Contato via WhatsApp"
    >
      <i className="fa-brands fa-whatsapp"></i>
    </a>
  );
};