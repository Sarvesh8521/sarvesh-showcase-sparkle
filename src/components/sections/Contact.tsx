import { useState } from "react";
import { ArrowUpRight, FileText, Github, Linkedin, Mail } from "lucide-react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useSiteSettings } from "@/hooks/useSiteSettings";
import { supabase } from "@/integrations/supabase/client";
import { Reveal } from "@/components/ui/Reveal";

const EMAIL = "sarvesh8521@gmail.com";

export const Contact = () => {
  const { toast } = useToast();
  const { settings } = useSiteSettings();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    const { error } = await supabase.from("contact_messages").insert({
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    });
    setSending(false);
    if (error) {
      toast({ title: "Couldn't send", description: error.message, variant: "destructive" });
      return;
    }
    toast({ title: "Message sent", description: "Thanks — I'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  const resumeHref = settings?.resume_url || "#";

  return (
    <section id="contact" className="py-28 md:py-40">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow mb-8">Contact</p>
        </Reveal>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-7">
            <Reveal>
              <h2 className="text-5xl md:text-7xl leading-[1] tracking-[-0.03em] font-medium">
                Let's build <span className="serif">something</span> <br /> worth shipping.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 text-base md:text-lg text-foreground/70 max-w-xl leading-relaxed">
                Open to backend, AI and full-time roles starting now. Also up for freelance and collaborations.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-12 space-y-5">
                <a href={`mailto:${EMAIL}`} className="block group">
                  <p className="eyebrow mb-1">Email</p>
                  <p className="text-2xl md:text-3xl link-underline">{EMAIL}</p>
                </a>
                <a href="tel:+916204350177" className="block group">
                  <p className="eyebrow mb-1">Phone</p>
                  <p className="text-2xl md:text-3xl link-underline">+91 62043 50177</p>
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-3 mt-12">
                <a href="https://github.com/Sarvesh8521" target="_blank" rel="noreferrer" className="btn-ghost text-xs">
                  <Github className="h-4 w-4" /> GitHub <ArrowUpRight className="h-3 w-3" />
                </a>
                <a href="https://www.linkedin.com/in/sarvesh-singh-964510173/" target="_blank" rel="noreferrer" className="btn-ghost text-xs">
                  <Linkedin className="h-4 w-4" /> LinkedIn <ArrowUpRight className="h-3 w-3" />
                </a>
                <a href={resumeHref} target="_blank" rel="noreferrer" className="btn-solid text-xs">
                  <FileText className="h-4 w-4" /> Resume
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="md:col-span-5">
            <form onSubmit={submit} className="space-y-6 md:pl-8 md:border-l md:border-border md:py-2 md:pl-10">
              <div>
                <label className="eyebrow block mb-2">Name</label>
                <Input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="bg-transparent border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-foreground text-base h-11"
                />
              </div>
              <div>
                <label className="eyebrow block mb-2">Email</label>
                <Input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="bg-transparent border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-foreground text-base h-11"
                />
              </div>
              <div>
                <label className="eyebrow block mb-2">Message</label>
                <Textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="bg-transparent border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-foreground text-base resize-none"
                />
              </div>
              <button type="submit" disabled={sending} className="btn-solid w-full justify-center disabled:opacity-60">
                <Mail className="h-4 w-4" /> {sending ? "Sending…" : "Send message"}
              </button>
              <p className="text-xs text-muted-foreground">
                Messages are delivered directly to Sarvesh.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
