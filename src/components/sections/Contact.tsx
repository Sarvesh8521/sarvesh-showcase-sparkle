import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, FileText } from "lucide-react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useSiteSettings } from "@/hooks/useSiteSettings";
import { supabase } from "@/integrations/supabase/client";

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
      read: false,
    });
    setSending(false);
    if (error) {
      toast({ title: "Couldn't send message", description: error.message, variant: "destructive" });
      return;
    }
    toast({ title: "Message sent ✓", description: "Sarvesh will get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  const resumeHref = settings?.resume_url || "/Sarvesh_Singh_Resume.pdf";

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="mono text-sm text-muted-foreground mb-2">// let's build something</p>
          <h2 className="text-3xl md:text-4xl font-bold">Get in touch</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="card-surface p-6 space-y-5" id="resume">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="mono text-sm">STATUS: <span className="accent-text">AVAILABLE_FOR_HIRE</span></span>
            </div>

            <div className="space-y-3 mono text-sm">
              <a href="mailto:sarvesh8521@gmail.com" className="flex items-center gap-3 hover:accent-text">
                <Mail className="h-4 w-4" /> sarvesh8521@gmail.com
              </a>
              <a href="tel:+916204350177" className="flex items-center gap-3 hover:accent-text">
                <Phone className="h-4 w-4" /> +91 6204350177
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4" /> Pune / Delhi, India
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              <a href="https://github.com/Sarvesh8521" target="_blank" rel="noreferrer" className="btn-icon">
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/sarvesh-singh-964510173/" target="_blank" rel="noreferrer" className="btn-icon">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a href={resumeHref} target="_blank" rel="noreferrer" className="btn-primary">
                <FileText className="h-4 w-4" /> Download Resume
              </a>
            </div>
          </div>

          <form onSubmit={submit} className="card-surface p-6 space-y-4">
            <div>
              <label className="mono text-xs text-muted-foreground">{">"} name</label>
              <Input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1 bg-background border-border" />
            </div>
            <div>
              <label className="mono text-xs text-muted-foreground">{">"} email</label>
              <Input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-1 bg-background border-border" />
            </div>
            <div>
              <label className="mono text-xs text-muted-foreground">{">"} message</label>
              <Textarea rows={5} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-1 bg-background border-border resize-none" />
            </div>
            <button type="submit" disabled={sending} className="btn-primary w-full justify-center disabled:opacity-60">
              <Send className="h-4 w-4" /> {sending ? "sending..." : "send_message()"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
