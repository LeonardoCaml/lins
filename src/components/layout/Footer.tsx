import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

const WHATSAPP_LINK = "https://wa.me/5581999279799";

export const Footer = () => {
  return (
    <footer className="section-wine relative overflow-hidden">
      {/* Gold top border */}
      <div className="gold-line" />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="space-y-6">
            <img src={logo} alt="Lins Advogados" className="h-16 w-auto" />
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Escritório de advocacia especializado em Direito Previdenciário e
              Benefícios do INSS, com atuação em todo o Brasil.
            </p>
            <a
              href="https://www.instagram.com/linsadvogados_/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors"
            >
              <Instagram className="w-5 h-5" />
              @linsadvogados_
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading text-accent mb-6">Navegação</h4>
            <ul className="space-y-3 flex flex-col text-sm text-primary-foreground/80">
              {[
                { name: "Início", path: "/" },
                { name: "Áreas de Atuação", path: "/areas-de-atuacao" },
                { name: "Sobre", path: "/sobre" },
                { name: "Depoimentos", path: "/depoimentos" },
                { name: "Contato", path: "/contato" },
              ].map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm font-medium transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-heading text-accent mb-6">
              Especialidades
            </h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li>Aposentadorias INSS</li>
              <li>BPC/LOAS</li>
              <li>Auxílio-doença</li>
              <li>Pensão por Morte</li>
              <li>Revisões Previdenciárias</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-heading text-accent mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/80">
                  Rua Bituri, 237
                  <br />
                  Recife - PE, 50090-320
                </span>
              </li>
              <li>
                <a
                  href={WHATSAPP_LINK}
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Phone className="w-5 h-5 text-accent" />
                  <span className="text-sm">(81) 9 9927-9799</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:Lucianalinseadvogados@gmail.com"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Mail className="w-5 h-5 text-accent" />
                  <span className="text-sm">
                    Lucianalinseadvogados@gmail.com
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent" />
                <span className="text-sm text-primary-foreground/80">
                  Seg - Sex: 8h às 17h
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-accent/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Lins Advogados. Todos os direitos
              reservados.
            </p>
            <div className="flex gap-6 text-sm text-primary-foreground/60">
              <Link
                to="/privacidade"
                className="hover:text-accent transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link
                to="/termos"
                className="hover:text-accent transition-colors"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
