import { Award, Users, MapPin, Heart } from "lucide-react";
import about from "@/assets/about-image.jpg";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 section-wine relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image placeholder */}
          <div className="aspect-square rounded-2xl border-2 border-accent/20 bg-wine w-full overflow-hidden">
            <img src={about} alt="" className="w-full h-full object-cover" />
          </div>

          <div className="space-y-6">
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">
              Sobre Nós
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">
              Mais que advogados: parceiros na sua{" "}
              <span className="text-accent">conquista</span>
            </h2>
            <p className="text-primary-foreground/70 leading-relaxed">
              Há 20 anos, a Lins Advogados nasceu de uma história real — a luta
              pela aposentadoria de uma pessoa próxima. Desde então, já ajudamos
              mais de 25.000 clientes a conquistarem seus direitos. Acreditamos
              que cada pessoa merece ser ouvida e tratada com respeito.
            </p>
            <p className="text-primary-foreground/70 leading-relaxed font-medium italic border-l-2 border-accent pl-4">
              "Você não é só mais um cliente. Você é alguém que merece ter seus
              direitos respeitados."
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { icon: Award, label: "20 anos de experiência" },
                { icon: Users, label: "+25.000 clientes" },
                { icon: MapPin, label: "4 unidades físicas" },
                { icon: Heart, label: "Atendimento humanizado" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-sm text-primary-foreground/80">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
