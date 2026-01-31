import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram, 
  MessageCircle,
  Send
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_LINK = "https://wa.me/5581999999999?text=Olá! Gostaria de agendar uma consulta.";

const Contato = () => {
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
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Mensagem enviada!",
      description: "Recebemos seu contato. Nossa equipe vai te chamar em breve.",
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 section-wine relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-wine-deep to-wine-medium" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6">
              Entre em Contato
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Estamos prontos para ouvir você. Faça sua triagem agora 
              e dê o primeiro passo para conquistar seus direitos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
                  Solicite sua Triagem
                </h2>
                <p className="text-muted-foreground mb-6">
                  Preencha o formulário e nossa equipe entrará em contato em até 24h úteis.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-foreground mb-1">
                      Nome completo *
                    </label>
                    <Input
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="whatsapp" className="block text-sm font-medium text-foreground mb-1">
                        WhatsApp *
                      </label>
                      <Input
                        id="whatsapp"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        placeholder="(00) 00000-0000"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="cidade" className="block text-sm font-medium text-foreground mb-1">
                        Cidade/UF *
                      </label>
                      <Input
                        id="cidade"
                        name="cidade"
                        value={formData.cidade}
                        onChange={handleChange}
                        placeholder="Ex: Recife/PE"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="assunto" className="block text-sm font-medium text-foreground mb-1">
                      Qual benefício/assunto? *
                    </label>
                    <Input
                      id="assunto"
                      name="assunto"
                      value={formData.assunto}
                      onChange={handleChange}
                      placeholder="Ex: Aposentadoria, BPC, Revisão..."
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="mensagem" className="block text-sm font-medium text-foreground mb-1">
                      Conte-nos mais sobre seu caso
                    </label>
                    <Textarea
                      id="mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleChange}
                      placeholder="Descreva brevemente sua situação..."
                      rows={4}
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

                <p className="text-xs text-muted-foreground mt-4 text-center">
                  Ao enviar, você concorda com nossa{" "}
                  <a href="/privacidade" className="text-primary hover:underline">
                    Política de Privacidade
                  </a>
                </p>
              </div>
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* WhatsApp CTA */}
              <div className="bg-primary rounded-xl p-8 text-center">
                <MessageCircle className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-serif font-bold text-primary-foreground mb-2">
                  Prefere WhatsApp?
                </h3>
                <p className="text-primary-foreground/80 mb-4">
                  Atendimento rápido e direto. Clique e fale conosco agora.
                </p>
                <Button variant="gold" size="lg" asChild>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    Falar no WhatsApp
                  </a>
                </Button>
              </div>

              {/* Contact details */}
              <div className="bg-secondary rounded-xl p-8">
                <h3 className="text-xl font-serif font-bold text-foreground mb-6">
                  Informações de Contato
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Endereço</p>
                      <p className="text-muted-foreground">
                        Rua Bituri, 237<br />
                        Recife - PE, 50090-320
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Telefone</p>
                      <a 
                        href="tel:+5581999999999" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        (81) 9 9999-9999
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground">E-mail</p>
                      <a 
                        href="mailto:contato@linsadvogados.com.br"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        contato@linsadvogados.com.br
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Horário de Atendimento</p>
                      <p className="text-muted-foreground">
                        Segunda a Sexta: 8h às 18h
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Instagram className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Instagram</p>
                      <a 
                        href="https://instagram.com/linsadvogados_"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        @linsadvogados_
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-muted rounded-xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-muted-foreground/50 mx-auto mb-2" />
                  <p className="text-muted-foreground">
                    Rua Bituri, 237 - Recife/PE
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;
