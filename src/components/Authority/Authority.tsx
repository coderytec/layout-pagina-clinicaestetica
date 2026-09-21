import React, { useState } from "react";
import "./authority.css";

export const Authority: React.FC = () => {
  // Estado para alternar imagens dinamicamente ao clicar nos botões
  const [activeImage, setActiveImage] = useState(0);

  const clinicImages = [
    {
      url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80",
      title: "Sala de Atendimento Avançado"
    },
    {
      url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80",
      title: "Recepção Boutique"
    },
    {
      url: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80",
      title: "Ambiente de Relaxamento"
    }
  ];

  return (
    <section id="sobre" className="authority-section py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Lado Esquerdo: Galeria Dinâmica com Efeito Interativo */}
          <div className="space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#e5dec9] h-[400px] sm:h-[450px]">
              <img 
                src={clinicImages[activeImage].url} 
                alt={clinicImages[activeImage].title}
                className="w-full h-full object-cover transition-all duration-700 transform hover:scale-105"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white">
                <span className="text-[#c5a059] text-xs uppercase tracking-widest font-medium">Tour Virtual</span>
                <h4 className="font-serif text-xl font-light">{clinicImages[activeImage].title}</h4>
              </div>
            </div>

            {/* Botões Dinâmicos para trocar a foto */}
            <div className="flex gap-3 justify-center pt-2">
              {clinicImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${activeImage === idx ? "w-10 bg-[#c5a059]" : "w-2.5 bg-stone-300 hover:bg-stone-400"}`}
                  aria-label={`Ver foto ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Lado Direito: Textos e Autoridade */}
          <div className="space-y-6">
            <span className="text-[#b08b42] font-semibold text-xs uppercase tracking-[0.2em] block">
              Excelência & Sofisticação
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-stone-900 leading-tight">
              Um santuário projetado para o seu <span className="italic text-[#c5a059]">bem-estar absoluto</span>.
            </h2>
            <p className="text-stone-600 font-light text-base leading-relaxed">
              Nossa clínica une arquitetura acolhedora no estilo *Quiet Luxury* a tecnologias de última geração. Cada detalhe foi pensado para proporcionar privacidade, conforto supremo e resultados estéticos com naturalidade incomparável.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-stone-200">
              <div>
                <h3 className="font-serif text-3xl text-stone-900 font-normal">+10 Anos</h3>
                <p className="text-xs text-stone-500 uppercase tracking-widest mt-1">De Experiência</p>
              </div>
              <div>
                <h3 className="font-serif text-3xl text-stone-900 font-normal">100%</h3>
                <p className="text-xs text-stone-500 uppercase tracking-widest mt-1">Personalizado</p>
              </div>
            </div>

            <div className="pt-2">
              <a 
                href="https://wa.me/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-stone-900 hover:text-[#c5a059] transition-colors"
              >
                Conheça nossa estrutura pessoalmente <i className="fa-solid fa-arrow-right text-[10px]"></i>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};