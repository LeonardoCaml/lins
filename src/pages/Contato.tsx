import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { useToast } from "@/hooks/use-toast";

type FormData = {
  nome: string;
  whatsapp: string;
  cidade: string;
  assunto: string;
  mensagem: string;
};

const initialFormData: FormData = {
  nome: "",
  whatsapp: "",
  cidade: "",
  assunto: "",
  mensagem: "",
};

const Contato = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulação de envio
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "Mensagem enviada!",
        description:
          "Recebemos seu contato. Nossa equipe vai te chamar em breve.",
      });

      setFormData(initialFormData);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Layout>
      <div
        id="contato"
        className="pt-32 pb-16 bg-wine-deep relative overflow-hidden"
      >
        <section className="pt-32 pb-16 bg-wine-deep relative overflow-hidden">
          <div className="absolute inset-0 bg-wine-deep" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
                Entre em Contato
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Estamos prontos para ouvir você. Faça sua triagem agora e dê o
                primeiro passo para conquistar seus direitos.
              </p>
            </motion.div>
          </div>
        </section>
        <div id="contact">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className=" relative overflow-hidden text-center px-6 py-10 sm:px-8 sm:py-11 border-r border-[rgba(201,168,76,0.06)] last:border-r-0 transition duration-30 hover:bg-[rgba(107,31,42,0.06) after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-px after:bg-[var(--gold)] after:opacity-50 after:transition-all after:duration-300 hover:after:w-[60%]">
              <MapPin className="text-accent mx-auto mb-3 h-10 w-10 leading-none bg-[linear-gradient(135deg,#f0bd47,#c38e22)] bg-clip-text" />
              <div className="mt-2 text-[0.65rem] sm:text-[0.68rem] tracking-[2px] uppercase text-[var(--muted)]">
                Endereço
              </div>
              <div className="text-xs text-muted-foreground leading-relaxed">
                Rua Bituri, 237 <br />
                Recife - PE
              </div>
            </div>
            <div className=" relative overflow-hidden text-center px-6 py-10 sm:px-8 sm:py-11 border-r border-[rgba(201,168,76,0.06)] last:border-r-0 transition duration-30 hover:bg-[rgba(107,31,42,0.06)] after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-px after:bg-[var(--gold)] after:opacity-50 after:transition-all after:duration-300 hover:after:w-[60%]">
              <Phone className="text-accent mx-auto mb-3 h-10 w-10 leading-none bg-[linear-gradient(135deg,#f0bd47,#c38e22)] bg-clip-text" />
              <div className="mt-2 text-[0.65rem] sm:text-[0.68rem] tracking-[2px] uppercase text-[var(--muted)]">
                Telefone
              </div>
              <a
                href="tel:+5581999279799"
                className="text-xs text-muted-foreground hover:text-primary transition"
              >
                (81) 9 9927-9799
              </a>
            </div>
            <div className=" relative overflow-hidden text-center px-6 py-10 sm:px-8 sm:py-11 border-r border-[rgba(201,168,76,0.06)] last:border-r-0 transition duration-300 hover:bg-[rgba(107,31,42,0.06)] after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-px after:bg-[var(--gold)] after:opacity-50 after:transition-all after:duration-300 hover:after:w-[60%]">
              <Mail className="text-accent mx-auto mb-3 h-10 w-10 leading-none bg-[linear-gradient(135deg,#f0bd47,#c38e22)] bg-clip-text" />
              <div className="mt-2 text-[0.65rem] sm:text-[0.68rem] tracking-[2px] uppercase text-[var(--muted)]">
                E-mail
              </div>
              <a
                href="mailto:Lucianalinseadvogados@gmail.com"
                className="text-xs text-muted-foreground hover:text-primary transition break-all"
              >
                Lucianalinseadvogados@gmail.com
              </a>
            </div>
            <div className="relative overflow-hidden text-center px-6 py-10 sm:px-8 sm:py-11 border-r border-[rgba(201,168,76,0.06)] last:border-r-0 transition duration-300 hover:bg-[rgba(107,31,42,0.06)] after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-px after:bg-[var(--gold)] after:opacity-50 after:transition-all after:duration-300 hover:after:w-[60%]">
              <Clock className="text-accent mx-auto mb-3 h-10 w-10 leading-none bg-[linear-gradient(135deg,#f0bd47,#c38e22)] bg-clip-text" />
              <div className="mt-2 text-[0.65rem] sm:text-[0.68rem] tracking-[2px] uppercase text-[var(--muted)]">
                Atendimento
              </div>
              <div className="text-xs text-muted-foreground">
                Seg - Sex <br /> 8h às 17h
              </div>
            </div>
          </div>
        </div>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-12">
              <div className="rounded-xl p-8">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6">
                  Solicite sua{" "}
                  <span className="text-gold-gradient">Triagem</span>
                </h2>
                <p className="text-muted-foreground mb-6">
                  Preencha o formulário e nossa equipe entrará em contato em até
                  24h úteis.
                </p>
                <form
                  onSubmit={handleSubmit}
                  className="contact-form mt-8 grid grid-cols-1 gap-4 sm:gap-5"
                >
                  <input
                    type="text"
                    name="nome"
                    placeholder="Seu nome completo"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                  />
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <input
                      type="tel"
                      name="whatsapp"
                      placeholder="WhatsApp com DDD"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="text"
                      name="cidade"
                      placeholder="Ex: Recife/PE"
                      value={formData.cidade}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <select
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Área de interesse
                    </option>
                    <option value="Planejamento Previdenciário">
                      Planejamento Previdenciário
                    </option>
                    <option value="Concessão de Benefícios">
                      Concessão de Benefícios
                    </option>
                    <option value="Revisão de Benefícios">
                      Revisão de Benefícios
                    </option>
                    <option value="BPC/LOAS">BPC/LOAS</option>
                    <option value="Ação Judicial e Administrativa">
                      Ação Judicial e Administrativa
                    </option>
                    <option value="Regularização de Tempo de Contribuição">
                      Regularização de Tempo de Contribuição
                    </option>
                    <option value="Consultoria Previdenciária">
                      Consultoria Previdenciária
                    </option>
                    <option value="Outros">Outros...</option>
                  </select>
                  <textarea
                    name="mensagem"
                    placeholder="Descreva brevemente sua situação..."
                    value={formData.mensagem}
                    onChange={handleChange}
                    rows={5}
                    required
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary"
                    style={{ width: "100%", padding: "18px" }}
                  >
                    {isSubmitting
                      ? "Enviando..."
                      : "Quero Minha Consulta Gratuita →"}
                  </button>
                </form>
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  Ao enviar, você concorda com nossa{" "}
                  <a
                    href="/privacidade"
                    className="text-primary hover:underline"
                  >
                    Política de Privacidade
                  </a>
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="bg-muted rounded-xl overflow-hidden">
                  <div className="w-full aspect-[16/9]">
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
      </div>
    </Layout>
  );
};

export default Contato;
