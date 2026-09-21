import React from "react";
import "./footer.css";

export const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16 border-b border-white/10">
          
          {/* Coluna 1: Marca e Descrição */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl tracking-[0.2em] text-white font-light">
              AURA<span className="text-[#c5a059]">.</span>
            </h3>
            <p className="text-stone-400 font-light text-sm leading-relaxed">
              Santuário de estética avançada dedicado a realçar sua beleza natural com sofisticação, segurança e protocolos exclusivos.
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="space-y-4">
            <h4 className="text-white text-xs font-semibold uppercase tracking-[0.2em]">Navegação</h4>
            <ul className="space-y-2.5 text-sm font-light">
              <li><a href="#sobre" className="footer-link">A Clínica</a></li>
              <li><a href="#tratamentos" className="footer-link">Tratamentos</a></li>
              <li><a href="#diferenciais" className="footer-link">Diferenciais</a></li>
              <li><a href="#depoimentos" className="footer-link">Depoimentos</a></li>
            </ul>
          </div>

          {/* Coluna 3: Horários e Redes */}
          <div className="space-y-4">
            <h4 className="text-white text-xs font-semibold uppercase tracking-[0.2em]">Contato & Horário</h4>
            <div className="space-y-2 text-sm font-light">
              <p className="text-stone-300 font-medium">Segunda a Sábado</p>
              <p className="text-stone-400">09:00 - 20:00</p>
            </div>
            <div className="flex gap-3 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="WhatsApp">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Coluna 4: Localização com Mapa Embutido */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-semibold uppercase tracking-[0.2em]">Localização</h4>
            <p className="text-stone-400 text-xs font-light">
              Av. das Américas, 1000 - Sala 402<br />Curitiba - PR
            </p>
            {/* Mapa integrado do Google Maps */}
            <div className="footer-map-container">
              <iframe
                title="Localização da Clínica Aura"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.7441819586146!2d-49.2733!3d-25.4284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDI1JzQyLjIiUyA0OWKwMTYnMjMuOSJX!5e0!3m2!1spt-BR!2sbr!4v1650000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 font-light">
          <p>© 2026 Aura Estética Avançada. Todos os direitos reservados.</p>
          <p className="mt-2 sm:mt-0">Desenvolvido com sofisticação e alta performance.</p>
        </div>

      </div>
    </footer>
  );
};