import { DarkBlobs } from "../ui/DarkBlobs";
import { LightBlobs } from "../ui/LightBlobs";

const ContactSection = () => {
  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-wine-gradient py-16 sm:py-20 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <LightBlobs />
        <DarkBlobs />
      </div>
      <div className="cta-box reveal text-center">
        <h2 className="text-3xl md:text-6xl font-sans font-bold text-primary-foreground">
          Fale com um advogado agora e
          <span className="text-accent"> entenda seu caso</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-primary-foreground/80 sm:text-base lg:text-lg">
          Atendimento rápido e direto pelo WhatsApp. Analisamos sua situação e
          orientamos o melhor caminho jurídico — sem compromisso.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4">
          <a
            href="https://wa.me/5581999279799?text=Olá,%20quero%20falar%20sobre%20meu%20caso."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full sm:w-auto px-8 py-5 text-base sm:text-lg"
          >
            Falar no WhatsApp agora →
          </a>
          <span className="text-xs text-primary-foreground/70">
            ✦ Resposta em poucos minutos • 100% confidencial
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
