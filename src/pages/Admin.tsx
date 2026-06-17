import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { LogOut, Upload, Image as ImageIcon, FileText, Save, Mail, Trash2, Check } from "lucide-react";
import type { Session } from "@supabase/supabase-js";

type Message = { id: string; name: string; email: string; message: string; read: boolean; created_at: string };

const Admin = () => {
  const { toast } = useToast();
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [checking, setChecking] = useState(true);

  // login form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [authLoading, setAuthLoading] = useState(false);

  // settings
  const [bio, setBio] = useState("");
  const [resumeUrl, setResumeUrl] = useState<string | null>(null);
  const [profileUrl, setProfileUrl] = useState<string | null>(null);
  const [settingsId, setSettingsId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);


  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => {
      setSession(s);
      if (s) checkAdmin(s.user.id);
      else { setIsAdmin(false); setChecking(false); }
    });
    supabase.auth.getSession().then(({ data: { session: s } }) => {
      setSession(s);
      if (s) checkAdmin(s.user.id);
      else setChecking(false);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  const checkAdmin = async (uid: string) => {
    const { data } = await supabase.from("user_roles").select("role").eq("user_id", uid).eq("role", "admin").maybeSingle();
    setIsAdmin(!!data);
    setChecking(false);
    if (data) { loadSettings(); loadMessages(); }
  };

  const loadMessages = async () => {
    const { data } = await supabase.from("contact_messages").select("*").order("created_at", { ascending: false });
    if (data) setMessages(data as Message[]);
  };

  const markRead = async (id: string, read: boolean) => {
    await supabase.from("contact_messages").update({ read }).eq("id", id);
    loadMessages();
  };
  const deleteMsg = async (id: string) => {
    if (!confirm("Delete this message?")) return;
    await supabase.from("contact_messages").delete().eq("id", id);
    loadMessages();
  };

  const loadSettings = async () => {
    const { data } = await supabase.from("site_settings").select("*").order("updated_at", { ascending: false }).limit(1).maybeSingle();
    if (data) {
      setSettingsId(data.id);
      setBio(data.bio ?? "");
      setResumeUrl(data.resume_url);
      setProfileUrl(data.profile_image_url);
    }
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    const fn = mode === "signin"
      ? supabase.auth.signInWithPassword({ email, password })
      : supabase.auth.signUp({ email, password, options: { emailRedirectTo: `${window.location.origin}/admin` } });
    const { error } = await fn;
    setAuthLoading(false);
    if (error) toast({ title: "Auth error", description: error.message, variant: "destructive" });
    else if (mode === "signup") toast({ title: "Account created", description: "Ask the project owner to grant you admin access." });
  };

  const upload = async (file: File, path: string) => {
    const { error } = await supabase.storage.from("portfolio-assets").upload(path, file, { upsert: true, contentType: file.type });
    if (error) throw error;
    const { data } = supabase.storage.from("portfolio-assets").getPublicUrl(path);
    return `${data.publicUrl}?v=${Date.now()}`;
  };

  const onResume = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; if (!file) return;
    try {
      const url = await upload(file, "resume.pdf");
      setResumeUrl(url);
      await save({ resume_url: url });
      toast({ title: "Resume updated" });
    } catch (err: any) { toast({ title: "Upload failed", description: err.message, variant: "destructive" }); }
  };

  const onProfile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; if (!file) return;
    const ext = file.type === "image/png" ? "png" : file.type === "image/webp" ? "webp" : "jpg";
    try {
      const url = await upload(file, `profile.${ext}`);
      setProfileUrl(url);
      await save({ profile_image_url: url });
      toast({ title: "Profile picture updated" });
    } catch (err: any) { toast({ title: "Upload failed", description: err.message, variant: "destructive" }); }
  };

  const save = async (patch: Record<string, any>) => {
    if (!settingsId) return;
    const { error } = await supabase.from("site_settings").update({ ...patch, updated_at: new Date().toISOString() }).eq("id", settingsId);
    if (error) throw error;
  };

  const saveBio = async () => {
    setSaving(true);
    try { await save({ bio }); toast({ title: "Bio saved" }); }
    catch (err: any) { toast({ title: "Save failed", description: err.message, variant: "destructive" }); }
    finally { setSaving(false); }
  };

  if (checking) return <div className="min-h-screen flex items-center justify-center mono text-muted-foreground">Loading…</div>;

  // Login screen
  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 grid-bg">
        <form onSubmit={handleAuth} className="card-surface p-8 w-full max-w-md space-y-4">
          <h1 className="text-2xl font-bold">Admin {mode === "signin" ? "Sign in" : "Sign up"}</h1>
          <p className="mono text-xs text-muted-foreground">// portfolio control panel</p>
          <Input placeholder="Email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input placeholder="Password" type="password" required minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button type="submit" disabled={authLoading} className="w-full">{authLoading ? "…" : mode === "signin" ? "Sign in" : "Create account"}</Button>
          <button type="button" className="text-xs text-muted-foreground hover:accent-text mono" onClick={() => setMode(mode === "signin" ? "signup" : "signin")}>
            {mode === "signin" ? "Need an account? Sign up" : "Have an account? Sign in"}
          </button>
        </form>
      </div>
    );
  }

  // Logged-in but not admin
  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="card-surface p-8 max-w-md text-center space-y-4">
          <h1 className="text-xl font-bold">Not an admin</h1>
          <p className="text-sm text-muted-foreground">
            Your account ({session.user.email}) is signed in but doesn't have admin access yet.
          </p>
          <p className="mono text-xs text-muted-foreground">
            User ID: {session.user.id}
          </p>
          <p className="text-xs text-muted-foreground">
            Open Lovable Cloud → Database → user_roles and add a row with this user_id and role = "admin".
          </p>
          <Button variant="outline" onClick={() => supabase.auth.signOut()}><LogOut className="h-4 w-4 mr-2" /> Sign out</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 py-12">
      <div className="max-w-3xl mx-auto space-y-6">
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Portfolio Admin</h1>
            <p className="mono text-xs text-muted-foreground">{session.user.email}</p>
          </div>
          <Button variant="outline" size="sm" onClick={() => supabase.auth.signOut()}>
            <LogOut className="h-4 w-4 mr-2" /> Sign out
          </Button>
        </header>

        <section className="card-surface p-6 space-y-4">
          <h2 className="font-semibold flex items-center gap-2"><ImageIcon className="h-4 w-4 accent-text" /> Profile picture</h2>
          {profileUrl && <img src={profileUrl} alt="" className="w-32 h-32 rounded-md object-cover border border-border" />}
          <label className="btn-icon cursor-pointer w-fit">
            <Upload className="h-4 w-4" /> Upload new photo
            <input type="file" accept="image/jpeg,image/png,image/webp" className="hidden" onChange={onProfile} />
          </label>
          <p className="text-xs text-muted-foreground">JPG, PNG or WEBP. Replaces the previous photo instantly.</p>
        </section>

        <section className="card-surface p-6 space-y-4">
          <h2 className="font-semibold flex items-center gap-2"><FileText className="h-4 w-4 accent-text" /> Resume</h2>
          {resumeUrl && <a href={resumeUrl} target="_blank" rel="noreferrer" className="mono text-xs accent-text underline break-all">Current resume →</a>}
          <label className="btn-icon cursor-pointer w-fit">
            <Upload className="h-4 w-4" /> Upload new resume (PDF)
            <input type="file" accept="application/pdf" className="hidden" onChange={onResume} />
          </label>
        </section>

        <section className="card-surface p-6 space-y-4">
          <h2 className="font-semibold">Bio</h2>
          <Textarea rows={6} value={bio} onChange={(e) => setBio(e.target.value)} placeholder="Short bio shown on the homepage…" />
          <Button onClick={saveBio} disabled={saving}><Save className="h-4 w-4 mr-2" /> {saving ? "Saving…" : "Save bio"}</Button>
        </section>
      </div>
    </div>
  );
};

export default Admin;
