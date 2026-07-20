import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "RoktoSheba",
    description:
      "A location-aware blood donor matching platform for Dhaka. Recipients post a request and nearby verified donors of a matching blood group get notified within minutes.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "/projects/rokto-sheba.svg",
    github: "#",
    live: "#",
  },
  {
    id: 2,
    title: "ShikkhaSetu",
    description:
      "Connects volunteer university tutors with students in rural upazilas for free live classes and recorded lessons.",
    tags: ["Next.js", "Django", "PostgreSQL"],
    image: "/projects/shikkha-setu.svg",
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "Dhaka Traffic Insight",
    description:
      "A regression model trained on years of congestion reports to predict traffic severity and provide an interactive dashboard.",
    tags: ["Python", "Pandas", "scikit-learn"],
    image: "/projects/dhaka-traffic.svg",
    github: "#",
    live: "#",
  },
  {
    id: 4,
    title: "CRM",
    description: "A lightweight CRM to manage donor requests and matchings with audit trails and notifications.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "/projects/crm.svg",
    github: "#",
    live: "#",
  },
  {
    id: 5,
    title: "Workplace",
    description: "A collaboration dashboard for teams with tasks, boards, and realtime notifications.",
    tags: ["Next.js", "Django", "PostgreSQL"],
    image: "/projects/workplace.svg",
    github: "#",
    live: "#",
  },
  {
    id: 6,
    title: "BazarDaam Tracker",
    description: "Track market prices and provide historical trends and alerts for price swings.",
    tags: ["Python", "BeautifulSoup", "React"],
    image: "/projects/bazardam.svg",
    github: "#",
    live: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="mt-20 space-y-8">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.5em] text-white/50">projects</p>
        <h2 className="text-4xl font-extrabold sm:text-5xl">Things I&apos;ve Shipped</h2>
        <p className="max-w-3xl text-base text-white/70 sm:text-lg">
          Mostly problems close to home — traffic, blood donation, market prices, and access to tutoring.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <div
            key={p.id}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur-xl"
          >
            <div className="mb-4 h-40 w-full overflow-hidden rounded-lg bg-gray-800">
              {p.image?.toLowerCase().endsWith(".svg") ? (
                // Use a plain img for SVGs to avoid next/image optimization quirks
                // and ensure the SVG renders correctly from /public
                // eslint-disable-next-line @next/next/no-img-element
                <img src={p.image} alt={p.title} width={800} height={240} className="object-cover w-full h-40" />
              ) : (
                <Image
                  src={p.image ?? "/profile.svg"}
                  alt={p.title}
                  width={800}
                  height={240}
                  className="object-cover"
                />
              )}
            </div>

            <div className="flex items-start justify-between">
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <div className="text-sm text-white/60">{p.id.toString().padStart(2, "0")}</div>
            </div>

            <p className="mt-3 text-sm text-white/60">{p.description}</p>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="flex gap-3">
                <a href={p.github} className="text-sm text-white/60 hover:text-white">
                  GitHub
                </a>
                <a href={p.live} className="text-sm text-white/60 hover:text-white">
                  Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
