import { useState } from "react";
import { Phone, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ nome: "", email: "", whatsapp: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Retornaremos em até 15 minutos.",
    });
    setForm({ nome: "", email: "", whatsapp: "" });
  };

  return (
    <section
      id="contato"
      className="py-20 section-wine relative overflow-hidden"
    >
      <div className="absolute top-10 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
      <div className="container-narrow container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left */}
          <div className="space-y-6">
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">
              Contato
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground">
              Descubra se você tem{" "}
              <span className="text-accent">direito ao benefício</span>
            </h2>
            <p className="text-primary-foreground/70">
              Preencha o formulário ou entre em contato pelo WhatsApp.
              Respondemos em até 15 minutos no horário comercial.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center">
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
                <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center">
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
            <h3 className="text-xl font-serif font-bold mb-6">
              Análise Gratuita do Benefício
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-1 block">
                  Nome completo
                </label>
                <Input
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  placeholder="Seu nome"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-1 block">
                  E-mail
                </label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="seu@email.com"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-1 block">
                  WhatsApp
                </label>
                <Input
                  value={form.whatsapp}
                  onChange={(e) =>
                    setForm({ ...form, whatsapp: e.target.value })
                  }
                  placeholder="(00) 00000-0000"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-wine-gradient hover:bg-wine-light text-primary-foreground font-bold text-base py-6"
              >
                <Send className="w-5 h-5 mr-2" />
                Solicitar Análise Gratuita
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Seus dados estão seguros. Não compartilhamos com terceiros.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
