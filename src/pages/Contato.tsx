import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contato = () => {
  return (
    <>
      <div id="contato" className="pt-36 bg-wine-deep relative overflow-hidden">
        <section className="container mx-auto px-4 relative z-10">
          <div className="absolute inset-0" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
                Entre em Contato
              </h1>
              <p className="text-base sm:text-lg text-primary-foreground/80">
                Estamos prontos para ouvir você. Faça sua triagem agora e dê o
                primeiro passo para conquistar seus direitos.
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
            </motion.div>
          </div>
        </section>

        <section className="mt-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-12">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="bg-muted rounded-xl overflow-hidden">
                  <div className="w-full h-[260px] sm:h-[320px] md:h-[380px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d493.77795465525486!2d-34.893918720983926!3d-8.078659803429254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1f33d2415b77%3A0x52f872bed48b44c!2sLins%20Advogados%20-%20Escrit%C3%B3rio%20de%20Advocacia%20em%20Recife!5e0!3m2!1spt-BR!2sbr!4v1775761387270!5m2!1spt-BR!2sbr"
                      className="w-full h-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <div id="contact">
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <div className="relative overflow-hidden text-center px-6 py-10 sm:px-8 sm:py-11 border-r border-[rgba(201,168,76,0.06)] last:border-r-0 transition duration-300 hover:bg-[rgba(107,31,42,0.06)] after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-px after:bg-[var(--gold)] after:opacity-50 after:transition-all after:duration-300 hover:after:w-[60%]">
              <MapPin className="text-accent mx-auto mb-3 h-8 w-8" />
              <div className="text-xs tracking-[2px] uppercase text-primary-foreground/80 mb-2">
                Endereço
              </div>
              <div className="text-xs text-muted-foreground leading-relaxed">
                Rua Bituri, 237 <br />
                Recife - PE
              </div>
            </div>
            <div className=" relative overflow-hidden text-center px-6 py-10 sm:px-8 sm:py-11 border-r border-[rgba(201,168,76,0.06)] last:border-r-0 transition duration-30 hover:bg-[rgba(107,31,42,0.06)] after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-px after:bg-[var(--gold)]  after:opacity-50 after:transition-all after:duration-300 hover:after:w-[60%]">
              <Phone className="text-accent mx-auto mb-3 h-8 w-8" />
              <div className="text-xs tracking-[2px] uppercase text-primary-foreground/80 mb-2">
                Telefone
              </div>
              <a
                href="tel:+5581999279799"
                className="text-sm text-muted-foreground"
              >
                (81) 9 9927-9799
              </a>
            </div>
            <div className=" relative overflow-hidden text-center px-6 py-10 sm:px-8 sm:py-11 border-r border-[rgba(201,168,76,0.06)] last:border-r-0 transition duration-300 hover:bg-[rgba(107,31,42,0.06)] after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-px after:bg-[var(--gold)] after:opacity-50 after:transition-all after:duration-300 hover:after:w-[60%]">
              <Mail className="text-accent mx-auto mb-3 h-8 w-8" />
              <div className="text-xs tracking-[2px] uppercase text-primary-foreground/80 mb-2">
                E-mail
              </div>
              <a
                href="mailto:Lucianalinseadvogados@gmail.com"
                className="text-sm text-muted-foreground"
              >
                Lucianalinseadvogados@gmail.com
              </a>
            </div>
            <div className="relative overflow-hidden text-center px-6 py-10 sm:px-8 sm:py-11 border-r border-[rgba(201,168,76,0.06)] last:border-r-0 transition duration-300 hover:bg-[rgba(107,31,42,0.06)] after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-px after:bg-[var(--gold)] after:opacity-50 after:transition-all after:duration-300 hover:after:w-[60%]">
              <Clock className="text-accent mx-auto mb-3 h-8 w-8" />
              <div className="text-xs tracking-[2px] uppercase text-primary-foreground/80 mb-2">
                Atendimento
              </div>
              <div className="text-xs text-muted-foreground">
                Seg - Sex <br /> 8h às 17h
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contato;
