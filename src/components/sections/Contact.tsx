import { GlassCard } from "../ui/GlassCard";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Mail, Phone, MapPin, Send, Linkedin, Github, MessageSquare } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Terminal, CodeLine } from "../ui/Terminal";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:sarvesh8521@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.name}%0AEmail: ${formData.email}`;
    window.location.href = mailtoLink;
    
    toast({
      title: "Initializing email client...",
      description: "Opening your default email application.",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "email",
      value: "sarvesh8521@gmail.com",
      href: "mailto:sarvesh8521@gmail.com",
    },
    {
      icon: Phone,
      label: "phone",
      value: "+91 6204350177",
      href: "tel:+916204350177",
    },
    {
      icon: MapPin,
      label: "location",
      value: "Delhi, India",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 text-primary font-mono text-sm mb-4">
            <MessageSquare className="h-4 w-4" />
            <span>{"// contact_me"}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto font-mono text-sm">
            {"/* Open to opportunities and collaborations */"}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6 opacity-0 animate-fade-in-left delay-200">
            <Terminal title="contact_info.sh" className="w-full">
              <CodeLine prompt="$" command="cat contact_details.json" />
              <div className="text-muted-foreground mt-2 space-y-1">
                <span className="text-accent">{"{"}</span>
                {contactInfo.map((item, i) => (
                  <div key={item.label} className="pl-4">
                    <span className="text-muted-foreground">"{item.label}": </span>
                    {item.href ? (
                      <a href={item.href} className="text-primary hover:underline">
                        "{item.value}"
                      </a>
                    ) : (
                      <span className="text-[hsl(var(--cyber-blue))]">"{item.value}"</span>
                    )}
                    {i < contactInfo.length - 1 && ","}
                  </div>
                ))}
                <span className="text-accent">{"}"}</span>
              </div>
              
              <div className="mt-4 pt-4 border-t border-primary/20">
                <CodeLine prompt="$" command="./check_availability.sh" />
                <div className="flex items-center gap-2 mt-2 text-primary">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span>STATUS: AVAILABLE_FOR_HIRE</span>
                </div>
              </div>
            </Terminal>

            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/sarvesh-singh-964510173/", label: "LinkedIn" },
                { icon: Github, href: "https://github.com/Sarvesh8521", label: "GitHub" },
                { icon: Mail, href: "mailto:sarvesh8521@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex-1 glass p-4 rounded border border-primary/20 hover:border-primary/60 hover:neon-border transition-all duration-300 group flex items-center justify-center gap-2"
                >
                  <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-xs font-mono text-muted-foreground group-hover:text-primary">{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="opacity-0 animate-fade-in-right delay-200">
            <GlassCard hover={false} neon>
              <div className="font-mono text-sm text-muted-foreground mb-4">
                <span className="text-accent">{"// "}</span>
                Send me a message
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-mono text-muted-foreground">
                    {">"} name:
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="bg-background/50 border-primary/20 focus:border-primary font-mono text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-mono text-muted-foreground">
                    {">"} email:
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="bg-background/50 border-primary/20 focus:border-primary font-mono text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-mono text-muted-foreground">
                    {">"} message:
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message here..."
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="bg-background/50 border-primary/20 focus:border-primary font-mono text-sm resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 animate-pulse-glow font-mono uppercase tracking-wider"
                >
                  <Send className="mr-2 h-4 w-4" />
                  send_message()
                </Button>
              </form>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};
