import { Github, Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/50 mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/urgen06"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg glass-effect hover:neon-glow transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/urgen-munikar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg glass-effect hover:neon-glow transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=urgenmunikar06@gmail.com"
              className="p-3 rounded-lg glass-effect hover:neon-glow transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            © 2025 Urgen Munikar
          </p>
        </div>
      </div>
    </footer>
  );
};
