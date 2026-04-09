import { AlertCircle, Ban, Clock, ShieldOff } from "lucide-react";

const problems = [
  {
    icon: Ban,
    title: "Benefício negado pelo INSS",
    description: "Muitas pessoas têm seu pedido negado sem entender os motivos ou saber como recorrer.",
  },
  {
    icon: Clock,
    title: "Demora nos processos",
    description: "A burocracia faz com que processos demorem meses, enquanto você precisa de ajuda agora.",
  },
  {
    icon: ShieldOff,
    title: "Não conhece seus direitos",
    description: "Muitos brasileiros não sabem que têm direito a benefícios que podem mudar sua vida.",
  },
  {
    icon: AlertCircle,
    title: "Dificuldade financeira",
    description: "Sem renda suficiente, até as necessidades básicas ficam comprometidas.",
  },
];

const ProblemSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container mx-auto px-4 py-20 container-narrow">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">Você se identifica?</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">
            Sabemos como é difícil passar por isso
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Se você está enfrentando alguma dessas situações, saiba que não está sozinho.
            Estamos aqui para ajudar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="bg-card rounded-xl p-6 border border-border hover:border-wine/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-wine/20 transition-colors">
                <problem.icon className="w-6 h-6 text-wine" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{problem.title}</h3>
              <p className="text-sm text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
