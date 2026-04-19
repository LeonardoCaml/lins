import { motion } from "framer-motion";
import about from "@/assets/about-image.jpg";
import { Link } from "react-router-dom";

const stats = [
  {
    value: (
      <>
        25<span className="text-[2rem]">k+</span>
      </>
    ),
    label: "Casos Resolvidos",
    sub: "Em 20 anos de atuação",
  },
  {
    value: 26,
    label: "Taxa de Êxito",
    sub: "Média dos últimos 5 anos",
  },
  {
    value: 20,
    label: "Anos de Experiência",
    sub: "Desde 2006 no mercado jurídico",
  },
];

const timeline = [
  {
    year: "2004",
    title: "O caso que deu origem ao escritório",
    text: "Luciana Lins viabiliza a aposentadoria de uma pessoa próxima acometida por erisipela — um caso que marcou o início de uma atuação jurídica voltada à dignidade humana.",
  },
  {
    year: "2006",
    title: "Fundação da Lins Advogados",
    text: "O escritório nasce com foco em atendimento personalizado, priorizando relações próximas e soluções jurídicas com impacto direto na vida dos clientes.",
  },
  {
    year: "2012",
    title: "Consolidação regional",
    text: "Reconhecimento crescente pela atuação ética e resultados consistentes em demandas previdenciárias e cíveis, ampliando a base de clientes.",
  },
  {
    year: "2018",
    title: "Expansão estrutural",
    text: "Abertura de novas unidades físicas e fortalecimento da equipe para suportar o aumento da demanda com o mesmo padrão de qualidade.",
  },
  {
    year: "2024",
    title: "4 unidades e atuação consolidada",
    text: "O escritório atinge quatro unidades presenciais, mantendo o compromisso com atendimento humanizado e excelência técnica.",
  },
];

const trustCards = [
  {
    icon: "⚖️",
    title: "Ética Acima de Tudo",
    text: "Nunca prometemos o que não podemos entregar. Nossa abordagem é sempre honesta sobre riscos, prazos e expectativas — mesmo quando a verdade é difícil de ouvir.",
  },
  {
    icon: "🎯",
    title: "Estratégia Personalizada",
    text: "Não existe solução padrão para problemas únicos. Cada caso recebe um plano jurídico construído do zero, com análise profunda das variáveis envolvidas.",
  },
  {
    icon: "📞",
    title: "Atendimento Direto",
    text: "Você fala com o advogado responsável pelo seu caso, não com assistentes. Transparência e acesso direto ao profissional são inegociáveis aqui.",
  },
  {
    icon: "🔒",
    title: "Sigilo Absoluto",
    text: "Toda informação compartilhada com nosso escritório é tratada com confidencialidade máxima, protegida por rigorosos protocolos internos de segurança da informação.",
  },
  {
    icon: "📊",
    title: "Gestão Ativa do Caso",
    text: "Relatórios periódicos, atualizações proativas e acesso a um painel de acompanhamento do processo. Você nunca fica no escuro sobre o andamento do seu caso.",
  },
];

const Sobre = () => {
  return (
    <>
      <section
        id="sobre"
        className="relative overflow-x-hidden bg-wine-gradient text-[#f0ece0] font-sans"
      >
        <div className="pointer-events-none fixed inset-0 z-0 opacity-40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,168,76,0.06),transparent_45%),linear-gradient(180deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[length:auto,100%_24px]" />
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E\")",
            }}
          />
        </div>

        <section
          id="hero"
          className="relative z-10 grid min-h-screen grid-cols-1 overflow-hidden lg:grid-cols-2"
        >
          <div className="relative z-20 flex flex-col justify-center px-6 pb-16 pt-32 sm:px-8 sm:pt-36 lg:px-[6%] lg:pb-20 lg:pt-40">
            <motion.div
              className="mb-5 inline-flex w-fit border border-[#c9a84c]/20 bg-[#c9a84c]/10 px-3 py-1.5 text-[0.68rem] uppercase tracking-[3px] text-[#c9a84c]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              Nossa história
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
            >
              Mais de 20 anos
              <br />
              construindo <span className="text-gold-gradient">legados</span>
              <br />e protegendo direitos
            </motion.h1>

            <motion.p
              className="mb-12 max-w-[32rem] text-[0.98rem] font-light leading-[1.8] text-[#a09880]"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3, ease: "easeOut" }}
            >
              Conheça nossa história, valores e o compromisso com cada cliente
              que confia em nosso trabalho.
            </motion.p>

            <motion.div
              className="space-y-2 bg-[var(--glass)] border border-[var(--glass-border)] p-6 inline-block md:w-[60%] backdrop-blur-[6px] transition hover:-translate-y-1 hover:border-[rgba(201,168,76,0.25)]"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.45, ease: "easeOut" }}
            >
              <div className="font-sans text-[2.4rem] font-black leading-none text-[#c9a84c]">
                2006
              </div>
              <div className="text-sm leading-6 text-[#a09880]">
                <strong className="mb-0.5 block text-[0.85rem] font-medium text-[#f0ece0]">
                  Ano de Fundação
                </strong>
                Cabanga, Recife - com atuação em todo o Brasil
              </div>
            </motion.div>
          </div>

          <div className="relative hidden overflow-hidden lg:block">
            <div className="absolute inset-0 z-[1] flex items-end justify-center">
              <div className="relative flex h-[90%] w-full items-center justify-center">
                <img
                  src={about}
                  alt="escritorio"
                  className="h-full w-full object-cover"
                />

                <div className="absolute bottom-7 left-1/2 -translate-x-1/2 border border-[#c9a84c]/20 bg-[#080808]/85 px-6 py-2.5 text-center backdrop-blur-md">
                  <strong className="block font-sans text-[1rem] font-semibold text-[#c9a84c]">
                    Escritório da Lins Advogados
                  </strong>
                  <span className="text-[0.7rem] uppercase tracking-[2px] text-[#a09880]">
                    contamos com 4 unidades presenciais
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div
          id="numbers"
          className="relative z-10 border-y border-[#c9a84c]/20 bg-wine"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.13 }}
                className="relative overflow-hidden text-center px-6 py-10 sm:px-8 sm:py-11 border-r border-[rgba(201,168,76,0.06)] last:border-r-0 transition duration-30 hover:bg-[rgba(107,31,42,0.06) after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-px after:bg-[var(--gold)] after:opacity-50 after:transition-all after:duration-300 hover:after:w-[60%]"
              >
                <div className="absolute inset-x-0 bottom-0 mx-auto h-px w-0 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent transition-all duration-300 group-hover:w-[80%]" />
                <div className="font-heading text-[3.2rem] font-black leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#e8c96a] to-[#c9a84c]">
                  {item.value}
                </div>
                <div className="mt-3 text-[0.72rem] uppercase tracking-[2px] text-[#7a7060]">
                  {item.label}
                </div>
                <div className="mt-1.5 text-[0.78rem] leading-[1.4] text-[#a09880]">
                  {item.sub}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-16 py-24">
          <section
            id="history"
            className="relative z-10 bg-wine px-6 sm:px-8 lg:px-[6%]"
          >
            <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-20">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <h2 className="mb-4 text-[clamp(1.9rem,3.5vw,2.8rem)] font-bold font-heading leading-[1.2] tracking-[-0.02em] text-[#f0ece0]">
                  Uma história construída
                  <br />
                  sobre <span className="text-[#c9a84c]">resultados reais</span>
                </h2>
                <div className="space-y-6 text-[0.97rem] font-light leading-[1.85] text-[#a09880]">
                  <p>
                    A trajetória da{" "}
                    <strong className="font-medium text-[#f0ece0]">
                      Lins Advogados
                    </strong>{" "}
                    é pautada pelo compromisso com a justiça e a dignidade
                    humana. Nossa história teve início há duas décadas, quando a
                    fundadora,{" "}
                    <strong className="font-medium text-[#f0ece0]">
                      Luciana Lins
                    </strong>
                    , movida pelo desejo de ajudar, viabilizou a aposentadoria
                    de uma pessoa próxima que sofria de erisipela. Esse primeiro
                    caso não foi apenas uma vitória jurídica, mas o alicerce de
                    um escritório que nasceu para transformar vidas.
                  </p>
                  <p>
                    Ao longo desses 20 anos, evoluímos com solidez e ética. O
                    que começou com um atendimento personalizado transformou-se
                    em uma estrutura robusta que hoje conta com{" "}
                    <strong className="font-medium text-[#f0ece0]">
                      quatro unidades presenciais
                    </strong>
                    , preparadas para oferecer suporte jurídico de excelência e
                    manter a proximidade que sempre foi nossa marca registrada.
                  </p>
                  <blockquote className="my-10 border-l-[3px] border-[#c9a84c] bg-[#c9a84c]/5 px-7 py-5 text-[1.35rem] font-medium italic leading-[1.5] text-[#f0ece0]">
                    "Advogar é, antes de tudo, um ato de compromisso com a
                    dignidade humana."
                    <small className="mt-3 block not-italic font-sans text-[0.8rem] font-normal text-[#a09880]">
                      — Sobral Pinto
                    </small>
                  </blockquote>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              >
                <div className="mb-4 flex items-center gap-3 text-[0.7rem] uppercase tracking-[4px] text-[#c9a84c]">
                  <span className="h-px w-7 bg-[#c9a84c]" />
                  Linha do Tempo
                </div>
                <div className="flex flex-col">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: index * 0.1 }}
                      className="relative grid grid-cols-[80px_1fr] gap-6 last:pb-0"
                    >
                      {index < timeline.length - 1 && (
                        <div className="absolute bottom-3 left-[39px] top-[44px] w-px bg-gradient-to-b from-[#c9a84c]/30 to-[#c9a84c]/5" />
                      )}
                      <div className="relative text-right font-sans text-md font-semibold text-[#c9a84c]">
                        {item.year}
                      </div>
                      <div className="flex pl-5 pb-10">
                        <span className="absolute left-5 top-1.5 h-2.5 w-2.5 rounded-full bg-[#c9a84c] shadow-[0_0_12px_rgba(201,168,76,0.4)]" />
                        <div>
                          <h4 className="mb-2 text-base font-semibold text-[#f0ece0]">
                            {item.title}
                          </h4>
                          <p className="text-base text-[#a09880]">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
          <section
            id="trust"
            className="relative z-10 bg-wine px-6 sm:px-8 lg:px-[6%]"
          >
            <motion.div
              className="mx-auto mb-16 max-w-2xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <h2 className="text-[clamp(1.9rem,3.5vw,2.8rem)] font-bold font-heading leading-[1.2] tracking-[-0.02em] text-[#f0ece0]">
                Os pilares que sustentam
                <br />
                nossa <span className="text-[#c9a84c]">reputação</span>
              </h2>
              <p className="mt-4 text-[0.95rem] font-light leading-[1.75] text-[#a09880]">
                Cada decisão que tomamos é guiada por valores que colocam o
                cliente acima de tudo.
              </p>
            </motion.div>
            <div className="grid gap-6 xl:grid-cols-3">
              {trustCards.slice(0, 3).map((card, i) => (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative overflow-hidden border border-[rgba(201,168,76,0.15)] bg-[rgba(255,255,255,0.035)] p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-[rgba(201,168,76,0.3)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
                >
                  <div className="mb-6 flex h-[52px] w-[52px] items-center justify-center border border-[rgba(201,168,76,0.15)] bg-[rgba(201,168,76,0.08)] text-[1.4rem]">
                    {card.icon}
                  </div>
                  <h3 className="mb-3 font-sans text-[1.15rem] font-semibold text-[#f0ece0]">
                    {card.title}
                  </h3>
                  <p className="text-[0.85rem] leading-[1.7] text-[#a09880]">
                    {card.text}
                  </p>
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent opacity-30" />
                </motion.article>
              ))}
            </div>
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              {trustCards.slice(3).map((card, i) => (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="group relative overflow-hidden border border-[rgba(201,168,76,0.15)] bg-[rgba(255,255,255,0.035)] p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-[rgba(201,168,76,0.3)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
                >
                  <div className="mb-6 flex h-[52px] w-[52px] items-center justify-center border border-[rgba(201,168,76,0.15)] bg-[rgba(201,168,76,0.08)] text-[1.4rem]">
                    {card.icon}
                  </div>
                  <h3 className="mb-3 font-sans text-[1.15rem] font-semibold text-[#f0ece0]">
                    {card.title}
                  </h3>
                  <p className="text-[0.85rem] leading-[1.7] text-[#a09880]">
                    {card.text}
                  </p>
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent opacity-30" />
                </motion.article>
              ))}
            </div>
          </section>
        </div>

        <section
          id="cta"
          className="relative z-10 bg-wine px-6 py-24 text-center sm:px-8 lg:px-[6%] lg:py-28"
        >
          <div className="relative mx-auto max-w-3xl">
            <div className="pointer-events-none absolute inset-[-80px] bg-[radial-gradient(ellipse,rgba(201,168,76,0.06),transparent_70%)]" />

            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <h2 className="mb-5 text-[clamp(2rem,4vw,3rem)] font-bold font-heading leading-[1.2] tracking-[-0.02em] text-[#f0ece0]">
                Pronto para ter um
                <br />
                <span className="text-[#c9a84c]">parceiro jurídico</span> de
                verdade?
              </h2>
              <p className="mx-auto mb-12 max-w-2xl text-[1rem] leading-[1.7] text-[#a09880]">
                Agende uma consulta gratuita de 30 minutos. Sem compromisso, sem
                juridiquês — apenas uma conversa direta sobre o que você
                precisa.
              </p>
              <Link
                to="/contato"
                className="inline-flex items-center justify-center border-0 bg-gradient-to-r from-[#e8c96a] to-[#c9a84c] px-10 py-[18px] text-[0.85rem] font-bold uppercase tracking-[2px] text-[#080808] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(201,168,76,0.35)]"
              >
                Agendar Consulta Gratuita →
              </Link>
              <p className="mt-5 text-[0.75rem] text-[#7a7060]">
                ✦ Retorno garantido em até 2 horas úteis &nbsp;·&nbsp;
                Atendimento presencial ou online
              </p>
            </motion.div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Sobre;
