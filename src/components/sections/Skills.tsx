import { Cpu } from "lucide-react";

const posts = [
  { title: "Writing on backend engineering", summary: "Notes on building APIs that are clear to use and straightforward to maintain." },
  { title: "Learning in public: AI systems", summary: "Experiments and lessons from local language models, retrieval, and document workflows." },
  { title: "Reliable delivery, one change at a time", summary: "Thoughts on tests, observability, and making small improvements safer to ship." },
];

export const Skills = () => (
  <section id="writing" aria-labelledby="writing-title" className="px-5 py-20 sm:px-8">
    <div className="mx-auto max-w-6xl">
      <div className="section-intro mb-9">
        <p className="section-prefix">&gt; WRITING</p>
        <h2 id="writing-title" className="section-title">Notes from the build</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {posts.map((post, index) => (
          <article key={post.title} className="writing-row">
            <p className="mono mb-5 flex items-center gap-2 text-xs text-primary"><Cpu aria-hidden="true" className="h-4 w-4" /> DRAFT / 0{index + 1}</p>
            <h3 className="text-lg font-semibold leading-snug">{post.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{post.summary}</p>
            <p className="mono mt-5 text-xs text-muted-foreground">Date pending <span className="mx-2">·</span> Read time pending</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
