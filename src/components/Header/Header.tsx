import React, { useState, useEffect } from "react";
import "./header.css";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header className={`header-container ${isScrolled ? "py-3 shadow-sm" : "py-5"}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="header-logo">
            AURA<span className="text-[#c5a059] font-light">.</span>
          </a>

          {/* Navegação Desktop (Oculta em telas menores para evitar quebras) */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#sobre" className="header-nav-link">A Clínica</a>
            <a href="#tratamentos" className="header-nav-link">Tratamentos</a>
            <a href="#diferenciais" className="header-nav-link">Diferenciais</a>
            <a href="#depoimentos" className="header-nav-link">Depoimentos</a>
            <a href="#faq" className="header-nav-link">FAQ</a>
          </nav>

          {/* Botão de Ação CTA WhatsApp (Desktop) */}
          <div className="hidden sm:flex items-center">
            <a 
              href="https://wa.me/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="whatsapp-cta-btn"
            >
              <i className="fa-brands fa-whatsapp text-sm"></i> Agendar Avaliação
            </a>
          </div>

          {/* Botão do Menu Hambúrguer (Celulares e Tablets) */}
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden text-stone-900 text-2xl p-2 focus:outline-none"
            aria-label="Abrir menu"
          >
            <i className="fa-solid fa-bars"></i>
          </button>

        </div>
      </header>

      {/* Menu Drawer Mobile Responsivo */}
      <div 
        className={`mobile-menu-overlay ${mobileMenuOpen ? "open" : ""}`}
        onClick={closeMenu}
      ></div>

      <div className={`mobile-menu-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <div className="flex items-center justify-between pb-8 border-b border-stone-200">
          <span className="font-serif text-2xl tracking-[0.2em] text-stone-900 font-bold">
            AURA<span className="text-[#c5a059]">.</span>
          </span>
          <button 
            onClick={closeMenu}
            className="text-stone-700 text-xl p-2 focus:outline-none hover:text-[#c5a059]"
            aria-label="Fechar menu"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <nav className="flex flex-col space-y-6 pt-8">
          <a href="#sobre" onClick={closeMenu} className="font-serif text-lg text-stone-800 hover:text-[#c5a059] transition-colors">A Clínica</a>
          <a href="#tratamentos" onClick={closeMenu} className="font-serif text-lg text-stone-800 hover:text-[#c5a059] transition-colors">Tratamentos</a>
          <a href="#diferenciais" onClick={closeMenu} className="font-serif text-lg text-stone-800 hover:text-[#c5a059] transition-colors">Diferenciais</a>
          <a href="#depoimentos" onClick={closeMenu} className="font-serif text-lg text-stone-800 hover:text-[#c5a059] transition-colors">Depoimentos</a>
          <a href="#faq" onClick={closeMenu} className="font-serif text-lg text-stone-800 hover:text-[#c5a059] transition-colors">FAQ</a>
        </nav>

        <div className="mt-auto pt-6 border-t border-stone-200">
          <a 
            href="https://wa.me/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="whatsapp-cta-btn w-full justify-center py-3 text-xs"
          >
            <i className="fa-brands fa-whatsapp text-sm"></i> Agendar Avaliação
          </a>
        </div>
      </div>
    </>
  );
};