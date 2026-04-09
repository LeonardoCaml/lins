import { Check } from "lucide-react";

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
      <div className="container-narrow container mx-auto px-4 py-20">
        <div className="bg-card rounded-2xl border border-border overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Left: content */}
            <div className="p-8 md:p-12 space-y-6">
              <span className="text-sm font-semibold text-accent uppercase tracking-widest">
                Benefícios
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                O que você ganha ao contar com a gente
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: image placeholder */}
            <div className="bg-muted flex items-center justify-center min-h-[300px]">
              <span className="text-muted-foreground/40 text-sm">Imagem</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
