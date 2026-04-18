import { Check } from "lucide-react";
import benefits1 from "@/assets/benefits.jpg";

const benefits = [
  "Renda mensal garantida para você e sua família",
  "Dignidade financeira e independência",
  "Acesso a direitos que você já tem, mas não sabia",
  "Segurança e tranquilidade para sua família",
  "Apoio jurídico completo do início ao fim",
  "Sem complicação — cuidamos de tudo por você",
];

const BenefitsSection = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow container mx-auto px-4 py-16">
        <div className="relative rounded-2xl overflow-hidden border border-accent/15 shadow-[0_0_0_1px_rgba(212,175,55,0.08),0_24px_64px_-12px_rgba(0,0,0,0.35)]">
          {/* Gold top line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient z-10" />

          <div className="grid lg:grid-cols-2">
            {/* Left: dark wine panel */}
            <div className="relative bg-wine-gradient p-8 md:p-12 space-y-7">
              <div>
                <span className="text-sm font-semibold text-accent uppercase tracking-widest">
                  Benefícios
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mt-2">
                  O que você ganha ao contar com a gente
                </h2>
              </div>

              <ul className="space-y-3">
                {benefits.map((benefit, i) => (
                  <li key={benefit} className="flex items-start gap-4 group">
                    {/* Numbered check badge */}
                    <div className="w-7 h-7 rounded-lg bg-accent/15 border border-accent/30 flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-200 group-hover:bg-accent/25">
                      <Check className="w-3.5 h-3.5 text-accent" />
                    </div>
                    <span className="text-primary-foreground/85 leading-snug text-sm md:text-base">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: image with overlay */}
            <div className="relative min-h-[300px] lg:min-h-0">
              <img
                src={benefits1}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Subtle left-edge blend into wine panel */}
              <div className="absolute inset-0 bg-gradient-to-r from-wine/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
