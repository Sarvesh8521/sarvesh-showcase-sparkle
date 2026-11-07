import { useSiteSettings } from "@/hooks/useSiteSettings";

export const About = () => {
  const { settings } = useSiteSettings();
  const philosophy = settings?.bio || "I love backend engineering because the best systems feel dependable: clear APIs, observable behavior, and thoughtful failure handling. I enjoy turning real requirements into software teams can understand, operate, and trust.";

  return (
    <section id="about" aria-labelledby="about-title" className="section-band px-5 py-20 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.7fr_1.3fr] md:items-start">
        <div className="section-intro">
          <p className="section-prefix">&gt; ABOUT</p>
          <h2 id="about-title" className="section-title">Engineering philosophy</h2>
        </div>
        <div className="max-w-3xl border-l border-primary/60 pl-5 sm:pl-8">
          <p className="text-lg leading-relaxed text-foreground/90">{philosophy}</p>
          <p className="mono mt-6 text-sm text-muted-foreground">// clean systems · observability · reliability</p>
        </div>
      </div>
    </section>
  );
};
