import { Layout } from "@/components/layout/Layout";
import WaIcon from "@/components/ui/WaIcon";
import "@/styles/testimonials.css";

const WHATSAPP_LINK =
  "https://wa.me/5581999279799?text=Olá! Gostaria de avaliar meu caso.";

const testimonials = [
  {
    name: "Eduardo Pedro",
    location: "Recife, PE",
    text: "Contratei para a aposentadoria da minha genitora e foi concedido em tempo recorde. Recomendo pelos resultados.",
    rating: 5,
    service: "Aposentadoria",
    date: "2 anos atrás",
  },
  {
    name: "Netbits",
    location: "Recife, PE",
    text: "Aqui você resolve tudo nas áreas Cível, Criminal, INSS, Pensão Alimentícia e mais.",
    rating: 5,
    service: "Atendimento Geral",
    date: "2 anos atrás",
  },
  {
    name: "Ana Cris",
    location: "Recife, PE",
    text: "Muito boa localização e boa recepção no atendimento.",
    rating: 5,
    service: "Atendimento Presencial",
    date: "3 anos atrás",
  },
  {
    name: "Nildiane Santos",
    location: "Recife, PE",
    text: "Atendimento de primeira qualidade, ótima localização e excelentes profissionais. Recomendo.",
    rating: 5,
    service: "Atendimento Geral",
    date: "6 anos atrás",
  },
  {
    name: "Conceição Rocha",
    location: "Recife, PE",
    text: "Excelente localização com profissionais capacitados e de fácil acessibilidade.",
    rating: 5,
    service: "Atendimento Presencial",
    date: "6 anos atrás",
  },
  {
    name: "Marcelo Acioly",
    location: "Recife, PE",
    text: "Excelentes profissionais, excelente atendimento e de fácil localização. Recomendo.",
    rating: 5,
    service: "Atendimento Geral",
    date: "6 anos atrás",
  },
  {
    name: "Eduardo Amaral",
    location: "Recife, PE",
    text: "Fui a este lugar pela primeira vez.",
    rating: 4,
    service: "Atendimento Presencial",
    date: "8 anos atrás",
  },
  {
    name: "Wilson J Silva",
    location: "Recife, PE",
    text: "Muito bom.",
    rating: 5,
    service: "Atendimento Geral",
    date: "4 anos atrás",
  },
  {
    name: "Luiz Siqueira",
    location: "Recife, PE",
    text: "Ótimo atendimento.",
    rating: 5,
    service: "Atendimento Geral",
    date: "3 anos atrás",
  },
  {
    name: "Erika Alves",
    location: "Recife, PE",
    text: "Ótimo.",
    rating: 5,
    service: "Atendimento Geral",
    date: "2 anos atrás",
  },
  {
    name: "Robson Flor",
    location: "Recife, PE",
    text: "Boa.",
    rating: 4,
    service: "Atendimento Geral",
    date: "1 ano atrás",
  },
  {
    name: "Cleanderson Yuri",
    location: "Recife, PE",
    text: "Ótima.",
    rating: 5,
    service: "Atendimento Geral",
    date: "3 anos atrás",
  },
];

const services = [
  "Aposentadoria",
  "Direito Civil",
  "Direito Criminal",
  "INSS",
  "Pensão Alimentícia",
  "Direito do Trabalho",
  "Planejamento Patrimonial",
];

const Stars = ({ rating }: { rating: number }) => (
  <div className="flex gap-[2px]">
    {Array.from({ length: 5 }).map((_, i) => (
      <span
        key={i}
        className={`text-[0.85rem] ${
          i < rating ? "text-[var(--gold)]" : "text-[var(--muted)] opacity-30"
        }`}
      >
        ★
      </span>
    ))}
  </div>
);

const TestCard = ({ t }: any) => (
  <div className="break-inside-avoid bg-[var(--glass)] border border-[var(--glass-border)] p-6 mb-5 inline-block w-full backdrop-blur-[6px] transition hover:-translate-y-1 hover:border-[rgba(201,168,76,0.25)]">
    <div className="flex justify-between mb-4">
      <Stars rating={t.rating} />
      <span className="text-[0.65rem] uppercase tracking-[1.5px] text-[var(--gold-dim)] border border-[rgba(201,168,76,0.12)] px-2 py-[2px]">
        {t.service}
      </span>
    </div>

    <p className="italic text-[0.9rem] leading-[1.7] mb-5 text-[rgba(240,236,224,0.75)]">
      {t.text}
    </p>

    <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-full flex items-center justify-center bg-[linear-gradient(135deg,var(--wine-medium),var(--wine-deep))] border border-[rgba(201,168,76,0.2)] text-[var(--gold)]">
        {t.name.charAt(0)}
      </div>

      <div>
        <div className="text-sm font-semibold">{t.name}</div>
        <div className="text-xs text-[var(--muted)]">
          {t.location} · {t.date}
        </div>
      </div>
    </div>
  </div>
);

const Depoimentos = () => {
  return (
    <Layout>
      <div className="relative overflow-x-hidden bg-wine-gradient text-[#f0ece0] font-sans">
        <section className="relative overflow-hidden text-center flex items-center justify-center min-h-[52vh] pt-[120px] pb-[80px] px-[6%]">
          <div className="hero-vignette"></div>
          <div className="hero-arc arc1"></div>
          <div className="hero-arc arc2"></div>
          <div className="hero-arc arc3"></div>

          <div className="hero-content reveal">
            <div className="section-label">Prova Social</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6">
              Resultados &<br />
              <span className="text-gold-gradient">Depoimentos</span>
            </h1>
            <p className="hero-sub">
              Histórias reais de clientes que confiaram em nosso trabalho
              <br />e conquistaram seus direitos.
            </p>
            <div
              className=" inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 bg-[rgba(201,168,76,0.05)] border border-[rgba(201,168,76,0.18)] px-4 sm:px-6 py-2 sm:py-3 backdrop-blur-md text-center
"
            >
              <div className="flex gap-[2px] sm:gap-[3px]">
                <span className="text-[0.85rem] sm:text-[1rem] text-[var(--gold)]">
                  ★
                </span>
                <span className="text-[0.85rem] sm:text-[1rem] text-[var(--gold)]">
                  ★
                </span>
                <span className="text-[0.85rem] sm:text-[1rem] text-[var(--gold)]">
                  ★
                </span>
                <span className="text-[0.85rem] sm:text-[1rem] text-[var(--gold)]">
                  ★
                </span>
                <span className="text-[0.85rem] sm:text-[1rem] text-[var(--gold)]">
                  ★
                </span>
              </div>
              <div className="hidden sm:block w-px h-[18px] sm:h-[22px] bg-[rgba(201,168,76,0.2)]" />
              <div className="flex items-center gap-2 text-[0.7rem] sm:text-[0.78rem] text-[var(--muted2)] tracking-[0.5px] sm:tracking-[1px]">
                <span className="w-[6px] h-[6px] sm:w-[8px] sm:h-[8px] bg-[#4caf50] rounded-full shadow-[0_0_6px_rgba(76,175,80,0.5)]" />
                Avaliações verificadas
              </div>
            </div>
          </div>
        </section>

        <div id="stats">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 stats-inner reveal">
            <div className="stat-item reveal">
              <div className="stat-n">12+</div>
              <div className="stat-l">Avaliações 5 Estrelas</div>
            </div>
            <div className="stat-item reveal">
              <div className="stat-n">4.9</div>
              <div className="stat-l">Nota Média</div>
            </div>
            <div className="stat-item reveal">
              <div className="stat-n">98%</div>
              <div className="stat-l">Taxa de Êxito</div>
            </div>
            <div className="stat-item reveal">
              <div className="stat-n">20+</div>
              <div className="stat-l">Anos de Atuação</div>
            </div>
          </div>
        </div>

        <div className="ticker">
          <div className="flex gap-[48px] text-gold-gradient whitespace-nowrap animate-[tick_22s_linear_infinite]">
            {[...services, ...services].map((s, i) => (
              <span key={i}>
                {s} <span>✦</span>
              </span>
            ))}
          </div>
        </div>

        <section className="bg-[linear-gradient(var(--dark)_40%,#6d222c_100%)] px-[6%] py-20">
          <div className="test-header reveal">
            <div className="section-label">O que dizem sobre nós</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6">
              Vozes de quem
              <br />
              <span className="text-gold-gradient">
                conquistou seus direitos
              </span>
            </h2>
            <br />
            <p>
              Cada depoimento representa um caso real, uma vida transformada e
              um direito garantido com comprometimento e estratégia.
            </p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
            {testimonials.map((t, i) => (
              <TestCard key={i} t={t} />
            ))}
          </div>
        </section>

        <section id="cta" className="py-16">
          <div className="container cta-inner reveal">
            <div className="section-label">Próximo passo</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6">
              Faça parte das nossas
              <br />
              <span className="text-gold-gradient">histórias de sucesso</span>
            </h2>
            <p>
              Agende sua análise de caso e descubra como podemos ajudar você a
              conquistar seus direitos com estratégia e comprometimento.
            </p>
            <button type="submit" className="btn-primary text-sm">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2"
              >
                <WaIcon />
                Avaliar meu caso no WhatsApp
              </a>
            </button>
            <p className="cta-note">
              ✦ Resposta em até 2 horas úteis &nbsp;·&nbsp; Atendimento
              presencial ou online
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Depoimentos;
