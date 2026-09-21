import React, { useState } from "react";
import "./faq.css";

export const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions = [
    {
      q: "Como funciona a consulta de avaliação inicial?",
      a: "A consulta é um momento exclusivo de diagnóstico clínico avançado. Analisamos sua estrutura facial ou corporal, discutimos seus desejos e montamos um protocolo estético 100% personalizado para garantir naturalidade e segurança."
    },
    {
      q: "Os procedimentos estéticos causam dor?",
      a: "Utilizamos protocolos de conforto de última geração, incluindo cremes anestésicos tópicos de alta potência, técnicas delicadas e métodos de resfriamento, garantindo um procedimento extremamente tranquilo e confortável."
    },
    {
      q: "Em quanto tempo posso ver os resultados?",
      a: "O tempo varia conforme o protocolo escolhido. Tratamentos com bioestimuladores de colágeno mostram evolução progressiva em até 90 dias, enquanto procedimentos de harmonização e preenchimento oferecem resultados visíveis de forma imediata."
    },
    {
      q: "Quais cuidados devo tomar após os procedimentos?",
      a: "Fornecemos um guia pós-procedimento completo e individualizado. Geralmente, orientamos evitar exposição solar intensa nas primeiras 48h, não realizar atividades físicas pesadas no dia e utilizar protetor solar rigorosamente."
    },
    {
      q: "Os produtos utilizados são seguros e certificados?",
      a: "Absolutamente. Trabalhamos exclusivamente com marcas líderes globais, aprovadas pela ANVISA e órgãos internacionais de saúde, garantindo máxima pureza, durabilidade e segurança absoluta."
    },
    {
      q: "Onde a clínica está localizada e como agendar?",
      a: "Estamos localizados na Av. das Américas, 1000 - Sala 402, em Curitiba - PR, em um ambiente boutique reservado. O agendamento pode ser feito de forma rápida e direta através do nosso botão do WhatsApp."
    }
  ];

  return (
    <section id="faq" className="faq-section">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12 sm:mb-16">
          <span className="text-[#b08b42] font-semibold text-xs uppercase tracking-[0.25em] inline-block">
            Dúvidas Frequentes
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-stone-900 leading-tight">
            Perguntas <span className="italic text-[#c5a059]">Comuns</span>
          </h2>
          <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed">
            Esclareça suas principais dúvidas sobre nossos protocolos, segurança e atendimento exclusivo.
          </p>
        </div>

        {/* Acordeão Dinâmico */}
        <div className="space-y-4">
          {questions.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <div 
                key={index} 
                className={`faq-item ${isActive ? "active" : ""}`}
              >
                <button 
                  onClick={() => toggleFAQ(index)} 
                  className="faq-button"
                  aria-expanded={isActive}
                >
                  <span className="font-serif text-base sm:text-lg text-stone-900 font-normal pr-4">
                    {item.q}
                  </span>
                  <div className="faq-icon">
                    <i className="fa-solid fa-chevron-down"></i>
                  </div>
                </button>
                <div className="faq-content">
                  <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed pt-1">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};