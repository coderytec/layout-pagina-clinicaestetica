import React from "react";
import "./testimonials.css";

export const Testimonials: React.FC = () => {
  const reviews = [
    { 
      name: "Mariana Siqueira", 
      role: "Empresária",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      text: "A experiência na Aura é impecável desde a recepção. O resultado superou todas as minhas expectativas, muito natural e sofisticado." 
    },
    { 
      name: "Camila Medeiros", 
      role: "Arquiteta",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
      text: "Profissionais extremamente qualificadas. O ambiente transmite muita paz e segurança. Recomendo de olhos fechados a todas que buscam excelência!" 
    }
  ];

  return (
    <section id="depoimentos" className="testimonials-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Cabeçalho refinado (Removido o termo técnico "Prova Social") */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-[#b08b42] font-semibold text-xs uppercase tracking-[0.25em] inline-block">
            Histórias de Transformação
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-stone-900 leading-tight">
            O que dizem nossas <span className="italic text-[#c5a059]">clientes</span>
          </h2>
          <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed">
            A satisfação e a confiança de quem vive a experiência Aura diariamente.
          </p>
        </div>

        {/* Grid de Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reviews.map((r, i) => (
            <div key={i} className="testimonial-card space-y-6">
              
              <div className="space-y-4">
                {/* Estrelas Amarelas de Alto Impacto */}
                <div className="flex gap-1 text-[#f59e0b] text-sm">
                  {[...Array(5)].map((_, idx) => (
                    <i key={idx} className="fa-solid fa-star"></i>
                  ))}
                </div>

                <p className="text-stone-700 italic font-serif text-lg sm:text-xl leading-relaxed">
                  "{r.text}"
                </p>
              </div>

              {/* Informações da Cliente com Foto Real */}
              <div className="flex items-center gap-4 pt-4 border-t border-stone-100">
                <img 
                  src={r.image} 
                  alt={r.name} 
                  className="client-avatar"
                />
                <div>
                  <h4 className="font-serif text-lg text-stone-900 font-semibold">
                    {r.name}
                  </h4>
                  <p className="text-[11px] text-[#b08b42] uppercase tracking-widest font-medium mt-0.5">
                    {r.role}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};