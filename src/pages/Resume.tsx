import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Eye, GraduationCap, Code } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Resume = () => {
  // 🔹 Handles downloading a text-based CV dynamically
  const handleDownload = () => {
    const resumeContent = `
URGEN MUNIKAR - IT PROFESSIONAL

EDUCATION
• Bachelor of Computer Application - Prime College (2022-Present)
Currently pursuing a Bachelor of Computer Applications (BCA), gaining strong foundations in programming, databases, and web development.

SKILLS
Programming: JavaScript, TypeScript, Python, Java
Frontend: React, Vue.js, HTML5, CSS3, Tailwind CSS
Backend: Node.js, Express, Django, REST APIs
Database: PostgreSQL, MongoDB, MySQL
Tools: Git, Docker, AWS, Linux, CI/CD
    `.trim();

    const blob = new Blob([resumeContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "CV-Urgen.pdf"; 
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4 animate-fade-in">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-2">Resume</h1>
              <p className="text-muted-foreground">My professional journey and expertise</p>
            </div>

            {/* 🔹 Buttons */}
            <div className="flex gap-3">
              {/* View CV */}
              <Button asChild size="lg" className="gap-2 neon-glow">
                <a
                  href="/CV-Urgen.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Eye className="w-5 h-5" />
                  View CV
                </a>
              </Button>

              {/* Download CV */}
              <Button onClick={handleDownload} size="lg" className="gap-2 neon-glow">
                <Download className="w-5 h-5" />
                Download CV
              </Button>
            </div>
          </div>

          {/* Education Section */}
          <Card className="mb-8 glass-effect border-border/50 hover:neon-glow transition-all duration-300 animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="p-3 rounded-lg gradient-primary">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-l-2 border-primary pl-6 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary animate-pulse" />
                <h3 className="text-2xl font-bold mb-2">Bachelor of Computer Application</h3>
                <p className="text-primary font-semibold mb-2">Prime College • 2022 - Present</p>
                <p className="text-muted-foreground">
                  Currently pursuing a Bachelor of Computer Applications (BCA), gaining strong foundations in programming, databases, and web development.
                </p>
              </div>
            </CardContent>

            <CardContent className="space-y-6">
              <div className="border-l-2 border-primary pl-6 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary animate-pulse" />
                <h3 className="text-2xl font-bold mb-2">Higher Secondary Education</h3>
                <p className="text-primary font-semibold mb-2">Xavier Academy • 2020 - 2022</p>
                <p className="text-muted-foreground">
                  Completed Higher Secondary School with a focus on Science, strengthening problem-solving and analytical skills.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Skills Section */}
          <Card className="glass-effect border-border/50 hover:neon-glow transition-all duration-300 animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="p-3 rounded-lg gradient-primary">
                  <Code className="w-6 h-6 text-white" />
                </div>
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-bold mb-3 text-primary">Programming Languages</h3>
                <div className="flex flex-wrap gap-3">
                  {["Python", "Java", "PHP", "JavaScript", "SQL", "HTML/CSS"].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-lg glass-effect border border-primary/30 hover:neon-glow transition-all hover:scale-105 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3 text-accent">Backend Development</h3>
                <div className="flex flex-wrap gap-3">
                  {["Django", "REST APIs"].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-lg glass-effect border border-accent/30 hover:neon-glow transition-all hover:scale-105 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3 text-primary">Databases</h3>
                <div className="flex flex-wrap gap-3">
                  {["PostgreSQL", "MongoDB", "MySQL"].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-lg glass-effect border border-primary/30 hover:neon-glow transition-all hover:scale-105 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3 text-secondary">Tools & Others</h3>
                <div className="flex flex-wrap gap-3">
                  {["Git", "GitHub", "Linux", "VS Code"].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-lg glass-effect border border-secondary/30 hover:neon-glow transition-all hover:scale-105 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Resume;
