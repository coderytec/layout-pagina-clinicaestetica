import React from "react";
import "./hero.css";

export const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center relative z-10 space-y-8">
        <div className="hero-badge mx-auto">
          <i className="fa-solid fa-sparkles text-[#c5a059] text-xs"></i> Alta Estética & Rejuvenescimento
        </div>
        
        <h1 className="hero-title max-w-4xl mx-auto">
          Revele sua melhor versão com <span className="hero-title-highlight">elegância</span> e naturalidade.
        </h1>
        
        <p className="hero-text text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Protocolos exclusivos faciais e corporais aliados a tecnologias de ponta, planejados sob medida para realçar a sua essência única.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto hero-btn-primary">
            Quero Agendar Minha Avaliação
          </a>
          <a href="#tratamentos" className="w-full sm:w-auto hero-btn-secondary">
            Conhecer Tratamentos
          </a>
        </div>
      </div>
    </section>
  );
};