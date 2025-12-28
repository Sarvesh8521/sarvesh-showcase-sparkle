import { GlassCard } from "../ui/GlassCard";
import { Briefcase, GraduationCap, Award } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Python Developer Intern",
      company: "Auburn Digital Solutions",
      location: "Delhi",
      period: "December 2025 – Present",
      description: [
        "Developing backend financial monitoring and client lifecycle tool",
        "Implementing proposal tracking, approvals, documentation, and budgeting workflows",
        "Translating client proposals and SOWs into backend requirements",
        "Delivering Python/Django APIs aligned with project scope and timelines",
      ],
      current: true,
    },
    {
      type: "work",
      title: "Backend Developer Intern",
      company: "Kuhoo Finance Pvt. Ltd.",
      location: "Mumbai",
      period: "February 2025 – November 2025",
      description: [
        "Built and deployed a Jira-like Task Management System using Django and DRF",
        "Contributed to fintech backend services and REST APIs",
        "Developed comprehensive test cases for quality assurance",
        "Improved CI/CD pipelines for better deployment efficiency",
      ],
      current: false,
    },
  ];

  const education = {
    degree: "Master of Computer Applications (MCA)",
    institution: "MIT School of Business, MIT-WPU",
    location: "Pune",
    year: "2025",
    cgpa: "7.81",
    highlights: [
      "Organized Codeathon event for the college",
      "Built website for the college forum club",
    ],
  };

  const certifications = [
    "Artificial Intelligence Fundamentals",
    "AI Fundamentals with Capstone Project",
    "Web Development Fundamentals",
    "Programming for Everybody (Python) – Coursera",
  ];

  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <span className="text-primary font-medium text-sm tracking-wider uppercase">
            My Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Work Experience */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-semibold">
                Work Experience
              </h3>
            </div>

            {experiences.map((exp, index) => (
              <GlassCard
                key={exp.title + exp.company}
                className={`relative opacity-0 animate-fade-in-left delay-${(index + 1) * 100}`}
              >
                {exp.current && (
                  <span className="absolute -top-3 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    Current
                  </span>
                )}
                <div className="space-y-3">
                  <div>
                    <h4 className="text-xl font-display font-semibold">
                      {exp.title}
                    </h4>
                    <p className="text-primary font-medium">
                      {exp.company}{" "}
                      <span className="text-muted-foreground font-normal">
                        • {exp.location}
                      </span>
                    </p>
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <span className="text-primary mt-1.5">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
            ))}
          </div>

          {/* Education & Certifications */}
          <div className="space-y-6">
            {/* Education */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-2xl font-display font-semibold">Education</h3>
            </div>

            <GlassCard className="opacity-0 animate-fade-in-right delay-200 space-y-4">
              <div>
                <h4 className="text-lg font-display font-semibold">
                  {education.degree}
                </h4>
                <p className="text-primary font-medium">{education.institution}</p>
                <p className="text-sm text-muted-foreground">
                  {education.location} • {education.year}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">CGPA:</span>
                <span className="px-3 py-1 glass rounded-full text-sm font-semibold text-primary">
                  {education.cgpa}
                </span>
              </div>
              <ul className="space-y-2">
                {education.highlights.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="text-accent">★</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>

            {/* Certifications */}
            <div className="flex items-center gap-3 mb-6 mt-8">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-semibold">
                Certifications
              </h3>
            </div>

            <GlassCard className="opacity-0 animate-fade-in-right delay-300 space-y-3">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/50 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm">{cert}</span>
                </div>
              ))}
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};
