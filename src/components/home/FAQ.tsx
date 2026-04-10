import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quanto tempo leva o processo de aposentadoria?",
    answer:
      "O prazo varia de acordo com a complexidade do caso e o tipo de benefício solicitado. Processos administrativos no INSS costumam levar de 45 a 90 dias. Casos judiciais podem demorar mais. Durante a análise inicial, informamos uma estimativa realista para o seu caso específico.",
  },
  {
    question: "Preciso ir presencialmente ao escritório?",
    answer:
      "Não necessariamente. Atendemos clientes de todo o Brasil de forma online, através de videochamadas e troca de documentos digitalizados. Para clientes de Recife e região, oferecemos também atendimento presencial em nossa sede na Rua Bituri, 237.",
  },
  {
    question: "Quais documentos preciso para iniciar?",
    answer:
      "Para uma análise inicial, precisamos de: RG, CPF, comprovante de residência, carteira de trabalho (ou extrato CNIS) e documentos médicos caso seja pedido por incapacidade. Durante a triagem, informamos se há necessidade de documentos adicionais.",
  },
  {
    question: "Como funciona a cobrança de honorários?",
    answer:
      "Após a análise do seu caso, apresentamos os honorários de forma clara e transparente. Os valores variam conforme a complexidade. Oferecemos opções de pagamento e, em muitos casos, trabalhamos com honorários de êxito (pagamento apenas em caso de sucesso).",
  },
  {
    question: "Vocês atuam apenas com INSS?",
    answer:
      "Nosso foco principal é o Direito Previdenciário e benefícios do INSS. Porém, também atuamos em Direito de Família (pensão alimentícia), Cível, Criminal e Administrativo, oferecendo um atendimento completo aos nossos clientes.",
  },
  {
    question: "Como acompanho meu processo?",
    answer:
      "Mantemos você informado em cada etapa. Enviamos atualizações por WhatsApp ou e-mail sobre o andamento, próximos passos e qualquer novidade relevante. Você também pode entrar em contato a qualquer momento para tirar dúvidas.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Dúvidas Frequentes
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3 mb-4">
              Perguntas Comuns
            </h2>
            <p className="text-muted-foreground">
              Respostas claras para as principais dúvidas sobre nossos serviços
              e processos previdenciários.
            </p>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-accent/30"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
