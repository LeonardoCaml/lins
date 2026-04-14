import { useState, type ChangeEvent, type FormEvent } from "react";
import { useToast } from "@/hooks/use-toast";
import { DarkBlobs } from "../ui/DarkBlobs";
import { LightBlobs } from "../ui/LightBlobs";

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

const ContactSection = () => {
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
    <section
      id="contato"
      className="relative overflow-hidden bg-wine-gradient py-16 sm:py-20 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <LightBlobs />
        <DarkBlobs />
      </div>
      <div className="cta-box reveal">
        <div className="section-label" style={{ justifyContent: "center" }}>
          Próximo Passo
        </div>
        <h2 className="text-3xl md:text-6xl font-sans font-bold text-primary-foreground">
          Agende sua <span className="text-accent">consulta gratuita</span>{" "}
          agora mesmo!
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-6 text-primary-foreground/80 sm:text-base lg:text-lg">
          Fale com um especialista sem compromisso. Entendemos seu caso e
          apresentamos o melhor caminho jurídico para proteger seus direitos.
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
            <option value="Planejamento Previdenciário">Planejamento Previdenciário</option>
            <option value="Concessão de Benefícios">Concessão de Benefícios</option>
            <option value="Revisão de Benefícios">Revisão de Benefícios</option>
            <option value="BPC/LOAS">BPC/LOAS</option>
            <option value="Ação Judicial e Administrativa">Ação Judicial e Administrativa</option>
            <option value="Regularização de Tempo de Contribuição">Regularização de Tempo de Contribuição</option>
            <option value="Consultoria Previdenciária">Consultoria Previdenciária</option>
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
            {isSubmitting ? "Enviando..." : "Quero Minha Consulta Gratuita →"}
          </button>
        </form>
        <p className="form-note">✦ Sem spam. Retorno em até 2 horas úteis.</p>
      </div>
    </section>
  );
};

export default ContactSection;
