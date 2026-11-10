import { ArrowUpRight, CalendarDays } from "lucide-react";
import { posts } from "@/data/posts";

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(new Date(`${date}T12:00:00`));

export const Writing = () => (
  <section id="writing" aria-labelledby="writing-title" className="section-band px-5 py-20 sm:px-8">
    <div className="mx-auto max-w-6xl">
      <div className="section-intro mb-10">
        <p className="section-prefix">&gt; WRITING</p>
        <h2 id="writing-title" className="section-title">Notes from the build</h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Short essays on backend systems, applied AI, and the engineering decisions behind the work.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {posts.map((post, index) => (
          <article key={post.slug} className="writing-row card-surface flex flex-col px-5 py-6">
            <div className="flex items-center justify-between gap-4">
              <span className="mono text-xs text-primary">0{index + 1} / FIELD NOTE</span>
              <span className="mono inline-flex items-center gap-2 text-xs text-muted-foreground">
                <CalendarDays aria-hidden="true" /> {formatDate(post.date)}
              </span>
            </div>
            <h3 className="mt-6 text-xl font-semibold leading-snug">{post.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{post.summary}</p>
            <div className="mt-6 flex items-center gap-2 border-t border-border pt-4 font-mono text-xs text-muted-foreground">
              <span className="text-primary">/{post.slug}</span>
              <ArrowUpRight aria-hidden="true" />
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
