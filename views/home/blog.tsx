import Image from "next/image";

interface Post {
  id: number;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  href?: string;
}

const posts: Post[] = [
  {
    id: 1,
    title: "Cracking Codeforces Div 2: My six-month climb",
    date: "May 2026",
    readTime: "7 min read",
    excerpt: "How I improved problem solving from Pupil to Specialist level with structured practice.",
    image: "/blog/post-1.svg",
    href: "#",
  },
  {
    id: 2,
    title: "A beginner's guide to system design",
    date: "Mar 2026",
    readTime: "5 min read",
    excerpt: "Simple diagrams and principles I wish I'd known earlier when designing systems.",
    image: "/blog/post-2.svg",
    href: "#",
  },
  {
    id: 3,
    title: "What my Brain Station 23 internship taught me",
    date: "Jan 2026",
    readTime: "6 min read",
    excerpt: "Reflections from an internship: mentorship, code reviews, and real-world constraints.",
    image: "/blog/post-3.svg",
    href: "#",
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="mt-20 space-y-6">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.5em] text-white/50">//blog</p>
        <h2 className="text-4xl font-extrabold sm:text-5xl">Notes & Write-ups</h2>
        <p className="max-w-3xl text-base text-white/70 sm:text-lg">
          I write when I get stuck on something long enough to learn from it. Mostly DSA, competitive programming, and startup thoughts.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <article key={p.id} className="rounded-2xl border border-white/8 bg-white/3 p-4">
            <div className="overflow-hidden rounded-xl bg-gray-800">
              <img src={p.image} alt={p.title} className="w-full h-40 object-cover" />
            </div>

            <div className="mt-4">
              <div className="flex items-center gap-3 text-sm text-white/60">
                <span>{p.date}</span>
                <span>•</span>
                <span>{p.readTime}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-white/60">{p.excerpt}</p>
              <a href={p.href} className="mt-3 inline-block text-sm text-sky-300">
                Read the post →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
