import React from "react";
import "./benefits.css";

export const Benefits: React.FC = () => {
  const items = [
    {
      number: "01",
      title: "Atendimento Boutique",
      desc: "Privacidade absoluta, ambiente sofisticado e horário totalmente reservado para garantir conforto e atenção exclusiva."
    },
    {
      number: "02",
      title: "Segurança Rigorosa",
      desc: "Utilização estrita de produtos certificados globalmente e protocolos rígidos de biossegurança clínica."
    },
    {
      number: "03",
      title: "Tecnologia de Ponta",
      desc: "Equipamentos de última geração importados para assegurar resultados rápidos, duradouros e naturais."
    }
  ];

  return (
    <section id="diferenciais" className="diferenciais-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Layout em Grid assimétrico (Texto de introdução à esquerda, itens empilhados à direita) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Lado Esquerdo: Título e Contexto */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[#c5a059] font-semibold text-xs uppercase tracking-[0.3em] inline-block">
              O Padrão Aura
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-white leading-tight">
              Por que nos <span className="italic text-[#c5a059]">escolher?</span>
            </h2>
            <p className="text-stone-400 font-light text-base leading-relaxed">
              Diferenciais pensados minuciosamente para entregar uma experiência incomparável em cada etapa do seu cuidado estético e bem-estar.
            </p>
            <div className="pt-2">
              <a 
                href="https://wa.me/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#c5a059] hover:text-white transition-colors font-medium"
              >
                Conheça nossa estrutura <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* Lado Direito: Linhas Horizontais Dinâmicas (Fugindo totalmente do padrão de 3 caixas em cima) */}
          <div className="lg:col-span-7 space-y-4">
            {items.map((item, index) => (
              <div key={index} className="diferencial-row-item">
                <div className="diferencial-number-badge">
                  {item.number}
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-white font-normal mb-2">
                    {item.title}
                  </h3>
                  <p className="text-stone-400 text-sm font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};