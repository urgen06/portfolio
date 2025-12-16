import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Briefcase, Mail, ArrowRight, Sparkles } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto">
          {/* Photo */}
          <div className="relative group">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl gradient-primary p-1 animate-fade-in">
              <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <img
                      src="/portfolio/urgen.png"
                      alt="Profile"
                      className="w-64 h-64 object-contain rounded-2xl"
                    />
                </div>
              </div>
            </div>
            <div className="absolute -inset-4 gradient-primary opacity-20 blur-3xl group-hover:opacity-40 transition-opacity rounded-full" />
          </div>

          {/* Description */}
          <div className="flex-1 text-center lg:text-left space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 rounded-full glass-effect text-sm mb-4">
              <span className="gradient-text font-semibold"> Welcome to my portfolio</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="gradient-text neon-text">
                Urgen Munikar
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
              An IT student and developer passionate about building{" "}
              <span className="text-primary font-semibold">smart</span> and{" "}
              <span className="text-secondary font-semibold">modern</span> web systems
            </p>

            <p className="text-base md:text-lg text-muted-foreground/80 max-w-2xl">
              I craft beautiful, functional, and scalable applications that solve real-world problems.
              Let's build something amazing together!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <Button 
                size="lg" 
                onClick={() => navigate("/resume")}
                className="gap-2 neon-glow hover:scale-105 transition-all text-lg px-8"
              >
                <Briefcase className="w-5 h-5" />
                View Resume
                <ArrowRight className="w-5 h-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => navigate("/projects")}
                className="gap-2 glass-effect hover:neon-glow hover:scale-105 transition-all text-lg px-8"
              >
                Explore Projects
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => navigate("/contact")}
                className="gap-2 glass-effect hover:neon-glow hover:scale-105 transition-all text-lg px-8"
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 gradient-primary opacity-20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-40 right-20 w-32 h-32 gradient-accent opacity-20 blur-3xl rounded-full animate-pulse delay-1000" />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
