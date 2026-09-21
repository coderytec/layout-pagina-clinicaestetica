import React from "react";
import "./cta.css";

export const CTA: React.FC = () => {
  return (
    <section className="cta-section">
      <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-8">
        
        <span className="text-[#c5a059] font-semibold text-xs uppercase tracking-[0.3em] inline-block">
          Inicie sua Transformação
        </span>
        
        <h2 className="font-serif text-4xl sm:text-6xl font-light text-white leading-tight">
          Pronta para revelar a sua <span className="italic text-[#c5a059]">melhor versão</span>?
        </h2>
        
        <p className="text-stone-400 font-light text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Agende sua avaliação exclusiva com nossa equipe de especialistas e viva uma experiência única em estética avançada.
        </p>
        
        <div className="pt-4">
          <a 
            href="https://wa.me/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cta-btn"
          >
            <i className="fa-brands fa-whatsapp text-base"></i> Agendar via WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};