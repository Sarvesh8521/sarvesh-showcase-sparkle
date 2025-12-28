import { Github, Linkedin, Mail, Terminal } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-primary/10">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-muted-foreground text-xs font-mono">
            <Terminal className="h-4 w-4 text-primary" />
            <span>
              <span className="text-primary">©</span> {currentYear} Sarvesh Singh
              <span className="text-muted-foreground/50"> // </span>
              Built with <span className="text-primary">{"<code />"}</span>
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/sarvesh-singh-964510173/" },
              { icon: Github, href: "https://github.com/Sarvesh8521" },
              { icon: Mail, href: "mailto:sarvesh8521@gmail.com" },
            ].map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* ASCII Art */}
        <div className="text-center mt-6 text-[10px] font-mono text-muted-foreground/30 hidden md:block">
          {"</"} PORTFOLIO {"/>"}
        </div>
      </div>
    </footer>
  );
};
