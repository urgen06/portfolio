import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, Code2 } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Projects = () => {
  const projects = [
    {
      title: "Expense Tracker (DB) ",
      description: "Developed a CLI-based Expense Tracker in Python using PostgreSQL. Features include adding, viewing, updating, and deleting expenses, along with calculating total spending. Implements persistent storage with a PostgreSQL database and robust input handling.",
      videoUrl: "project_videos/exp_csv.webm",
      technologies: ["Python", "PostgreSql", "psycopg2"],
      demoLink: "https://demo-ecommerce.com",
      githubLink: "https://github.com/urgen06/Expense_Tracker_db.git",
      gradient: "from-primary to-secondary"
    },
    {
      title: "Expense Tracker (CSV)",
      description: "Built a command-line Expense Tracker in Python, allowing users to add, view, and summarize expenses. Implements CSV file storage for persistent data and provides total spending calculation with input validation.",
      videoUrl: "project_videos/exp_csv.webm",
      technologies: ["Python", "CSV module", "File Handling"],
      demoLink: "https://demo-ecommerce.com",
      githubLink: "https://github.com/urgen06/Expense_Tracker.git",
      gradient: "from-primary to-secondary"
    },
    {
      title: "Calculator App",
      description: "Developed a GUI-based Calculator in Python using Tkinter, supporting basic arithmetic operations with a responsive interface, clear/error handling, and dynamic input/output display.",
      videoUrl: "project_videos/calculator.webm",
      technologies: ["Python", "Tkinter", "Tailwind CSS"],
      demoLink: "https://demo-tasks.com",
      githubLink: "https://github.com/urgen06/Calculator.git",
      gradient: "from-secondary to-accent"
    },
    {
      title: "Weather Dashboard",
      description: "Built a desktop Weather App in Python using Tkinter, integrating OpenWeatherMap API to fetch real-time weather data. Features include city-based search, dynamic temperature display, and weather condition updates with a responsive GUI.",
      videoUrl: "project_videos/weather.webm",
      technologies: ["Python", "Tkinter", "OpenWeather API"],
      demoLink: "https://demo-weather.com",
      githubLink: "https://github.com/urgen06/Weather-App.git",
      gradient: "from-accent to-primary"
    },
    {
      title: "Snake Game",
      description: "Developed a Snake Game in Java using Swing, implementing object-oriented principles for the snake and food entities. Features include real-time movement, collision detection, dynamic scoring, and a responsive game loop with keyboard controls",
      videoUrl: "project_videos/snakegame.webm",
      technologies: ["Java"],
      // demoLink: "https://demo-analytics.com",
      githubLink: "https://github.com/urgen06/snakegame_java.git",
      gradient: "from-primary to-accent"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 animate-fade-in text-center">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">My Projects</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Here are some of my recent projects showcasing my skills and experience in software development.
              Each project demonstrates different aspects of modern web development.
            </p>
          </div>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden glass-effect border-border/50 hover:neon-glow transition-all duration-500 group animate-fade-in">
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Video Demo */}
                  <div className="relative bg-muted/50 overflow-hidden">
                    <div className="relative bg-muted/50 overflow-hidden">
                        <video
                            className="rounded-lg shadow-lg max-w-full h-auto"
                            src={project.videoUrl} // "/myproject.webm" or imported variable
                            autoPlay
                            loop
                            muted
                            playsInline
                            controls
                         />
                        <div
                        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none`}
                        />
                    </div>

                  </div>

                  {/* Project Details */}
                  <div className="p-6 lg:p-8 flex flex-col justify-between">
                    <div>
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-2xl md:text-3xl mb-3 gradient-text">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-base text-foreground/80">
                          {project.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="p-0 space-y-4">
                        <div>
                          <h3 className="font-semibold mb-3 flex items-center gap-2 text-muted-foreground">
                            <Code2 className="w-4 h-4" />
                            Technologies Used
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1.5 glass-effect border border-primary/30 text-sm rounded-lg hover:neon-glow transition-all hover:scale-105"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </div>

                    <div className="flex gap-3 pt-6">
                      {/* <Button asChild className="flex-1 gap-2 neon-glow">
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      </Button> */}
                      <Button asChild variant="outline" className="flex-1 gap-2 glass-effect hover:neon-glow">
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                          View Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
