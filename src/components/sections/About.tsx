import { useSiteSettings } from "@/hooks/useSiteSettings";
import { Reveal } from "@/components/ui/Reveal";

export const About = () => {
  const { settings } = useSiteSettings();
  const profileSrc = settings?.profile_image_url || "/placeholder.svg";
  const bio = settings?.bio || `Hello — I'm Sarvesh. A Python backend developer currently interning at Auburn Digital Solutions, where I build FastAPI microservices, secure auth flows and CI/CD-driven deployments. Previously at Kuhoo Finance, I shipped Django/DRF APIs powering financial workflows. I care about clean systems, good observability and software that ages gracefully.`;

  return (
    <section id="about" className="py-28 md:py-40">
      <div className="container-x grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-4">
          <Reveal>
            <p className="eyebrow mb-6">About</p>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-sm">
              <img src={profileSrc} alt="Sarvesh Singh" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-8 md:pl-8">
          <Reveal>
            <h2 className="text-3xl md:text-5xl leading-tight tracking-tight font-medium">
              Quiet engineer, <span className="serif">bringing systems to life</span> — through
              code, structure and a stubborn eye for detail.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 text-base md:text-lg text-foreground/75 max-w-2xl leading-relaxed">
              {bio}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <dl className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-6 mt-14">
              {[
                ["Based in", "Pune / Delhi"],
                ["Focus", "Backend · AI"],
                ["Stack", "Python · FastAPI"],
                ["Status", "Open to work"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="eyebrow mb-2">{k}</dt>
                  <dd className="text-sm">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
