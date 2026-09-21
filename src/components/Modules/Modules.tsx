import React from "react";
import "./modules.css";

export const Modules: React.FC = () => {
  const treatments = [
    {
      icon: "fa-face-sparkles",
      category: "Facial Premium",
      title: "Harmonização Facial",
      desc: "Técnicas avançadas e seguras para restaurar proporções, volume e jovialidade com extrema naturalidade e sofisticação."
    },
    {
      icon: "fa-dna",
      category: "Rejuvenescimento",
      title: "Bioestimuladores de Colágeno",
      desc: "Tratamento profundo focado em resgatar a firmeza e elasticidade da pele, combatendo a flacidez de dentro para fora."
    },
    {
      icon: "fa-spa",
      category: "Alta Performance",
      title: "Protocolos Corporais",
      desc: "Associação de tecnologias de última geração para definição de contornos, combate à celulite e remodelação corporal."
    }
  ];

  return (
    <section id="tratamentos" className="modules-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-[#b08b42] font-semibold text-xs uppercase tracking-[0.25em] inline-block">
            Excelência em Cuidados
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-stone-900 leading-tight">
            Tratamentos <span className="italic text-[#c5a059]">Exclusivos</span>
          </h2>
          <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed">
            Cada protocolo é prescrito sob medida após uma avaliação clínica detalhada e individualizada.
          </p>
        </div>

        {/* Grid de Cards Dinâmicos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {treatments.map((t, i) => (
            <div key={i} className="treatment-card flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="treatment-icon-wrapper">
                    <i className={`fa-solid ${t.icon}`}></i>
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#b08b42] bg-[#f3efe6] px-3 py-1 rounded-full border border-[#ebd9bc]/60">
                    {t.category}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-2xl text-stone-900 font-normal">
                    {t.title}
                  </h3>
                  <p className="text-stone-600 text-sm font-light leading-relaxed">
                    {t.desc}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100">
                <a 
                  href="https://wa.me/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase text-stone-900 hover:text-[#c5a059] group transition-colors"
                >
                  Saiba mais 
                  <i className="fa-solid fa-arrow-right text-[10px] transform group-hover:translate-x-1.5 transition-transform duration-300"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};