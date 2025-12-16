import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
         import.meta.env.VITE_EMAILJS_SERVICE_ID,
         import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          phone: formData.phone,
          message: formData.message,
        }
      )
      .then(() => {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });

        setFormData({
          name: "",
          email: "",
          subject: "",
          phone: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error(error);
        toast({
          title: "Error sending message",
          description: "Something went wrong. Try again.",
        });
      });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 animate-fade-in text-center">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Get In Touch
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have a project in mind or want to discuss opportunities? Feel free
              to reach out! I'm always open to new collaborations and exciting
              projects.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="glass-effect border-border/50 hover:neon-glow transition-all duration-300 animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl gradient-text">
                  Send a Message
                </CardTitle>
                <CardDescription className="text-base">
                  Fill out the form and I'll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="glass-effect border-border/50 focus:neon-glow"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="glass-effect border-border/50 focus:neon-glow"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-base">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="Your subject here"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="glass-effect border-border/50 focus:neon-glow"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-base">
                      Contact Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 234 567 8900"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="glass-effect border-border/50 focus:neon-glow"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-base">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project or inquiry..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="glass-effect border-border/50 focus:neon-glow resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full gap-2 neon-glow text-lg py-6"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6 animate-fade-in">
              <Card className="glass-effect border-border/50 hover:neon-glow transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-4 rounded-lg gradient-primary">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Email</h3>
                      <p className="text-muted-foreground mb-1">
                        urgenmunikar06@gmail.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect border-border/50 hover:neon-glow transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-4 rounded-lg gradient-accent">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Phone</h3>
                      <p className="text-muted-foreground mb-1">
                        +977 9861494177
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Call or text anytime
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect border-border/50 hover:neon-glow transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-4 rounded-lg gradient-primary">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Location</h3>
                      <p className="text-muted-foreground mb-1">
                        Nayabazar, Kathmandu
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Open to remote opportunities worldwide
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect border-border/50 hover:neon-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">Connect with me</CardTitle>
                  <CardDescription>Follow me on social media</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/urgen06"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-lg glass-effect hover:neon-glow transition-all duration-300 hover:scale-110 flex-1 flex flex-col items-center gap-2"
                    >
                      <Github className="w-6 h-6" />
                      <span className="text-sm">GitHub</span>
                    </a>
                    <a
                      href="https://linkedin.com/in/urgen-munikar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-lg glass-effect hover:neon-glow transition-all duration-300 hover:scale-110 flex-1 flex flex-col items-center gap-2"
                    >
                      <Linkedin className="w-6 h-6" />
                      <span className="text-sm">LinkedIn</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
