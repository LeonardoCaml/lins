import { useState } from "react";
import { Phone, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "../ui/textarea";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    cidade: "",
    assunto: "",
    mensagem: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Mensagem enviada!",
      description:
        "Recebemos seu contato. Nossa equipe vai te chamar em breve.",
    });

    setFormData({
      nome: "",
      whatsapp: "",
      cidade: "",
      assunto: "",
      mensagem: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contato"
      className="py-20 bg-wine-gradient relative overflow-hidden"
    >
      <div className="container-narrow container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left */}
          <div className="space-y-6">
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">
              Contato
            </span>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-primary-foreground">
              Descubra se você tem{" "}
              <span className="text-accent">direito ao benefício</span>
            </h2>
            <p className="text-primary-foreground/70">
              Preencha o formulário ou entre em contato pelo WhatsApp.
              Respondemos em até 15 minutos no horário comercial.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-primary-foreground">
                    WhatsApp
                  </p>
                  <p className="text-primary-foreground/70 text-sm">
                    (81) 99927-9799
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-primary-foreground">
                    Horário de Atendimento
                  </p>
                  <p className="text-primary-foreground/70 text-sm">
                    Seg–Sex, 08h–17h
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-card rounded-2xl p-8 text-card-foreground">
            <h3 className="text-xl font-sans font-bold mb-6">
              Preencha o formulário com seu caso
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="nome"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  Nome completo *
                </label>
                <Input
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className="bg-black/5"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="whatsapp"
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    WhatsApp *
                  </label>
                  <Input
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="(00) 00000-0000"
                    required
                    className="bg-black/5"
                  />
                </div>
                <div>
                  <label
                    htmlFor="cidade"
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    Cidade/UF *
                  </label>
                  <Input
                    id="cidade"
                    name="cidade"
                    value={formData.cidade}
                    onChange={handleChange}
                    placeholder="Ex: Recife/PE"
                    required
                    className="bg-black/5"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="assunto"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  Qual benefício/assunto? *
                </label>
                <Input
                  id="assunto"
                  name="assunto"
                  value={formData.assunto}
                  onChange={handleChange}
                  placeholder="Ex: Aposentadoria, BPC, Revisão..."
                  required
                  className="bg-black/5"
                />
              </div>

              <div>
                <label
                  htmlFor="mensagem"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  Conte-nos mais sobre seu caso
                </label>
                <Textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  placeholder="Descreva brevemente sua situação..."
                  rows={4}
                  className="bg-black/5"
                />
              </div>

              <Button
                type="submit"
                variant="gold"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Enviar Solicitação
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
