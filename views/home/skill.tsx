const skillGroups = [
  {
    label: "core",
    title: "Languages",
    tags: ["C++", "Python", "Java", "JavaScript", "TypeScript", "C"],
  },
  {
    label: "web",
    title: "Web Development",
    tags: ["Node.js", "Express.js", "React", "Next.js", "Tailwind CSS", "REST APIs"],
  },
  {
    label: "data",
    title: "Databases",
    tags: ["MySQL", "MongoDB", "PostgreSQL", "Redis (basics)"],
  },
  {
    label: "ml",
    title: "Data & ML",
    tags: ["Pandas", "NumPy", "scikit-learn", "Matplotlib"],
  },
  {
    label: "tools",
    title: "Tools & Platforms",
    tags: ["Git & GitHub", "Linux", "Docker (basics)", "Postman", "Figma"],
  },
  {
    label: "cs",
    title: "CS Fundamentals",
    tags: ["Data Structures", "Algorithms", "OOP", "DBMS", "Operating Systems"],
  },
];

const labelStyles: Record<string, string> = {
  core: "bg-violet-200/20 text-violet-200",
  web: "bg-orange-200/20 text-orange-200",
  data: "bg-pink-200/20 text-pink-200",
  ml: "bg-emerald-200/20 text-emerald-200",
  tools: "bg-rose-200/20 text-rose-200",
  cs: "bg-sky-200/20 text-sky-200",
};

export function SkillSection() {
  return (
    <section id="skills" className="mt-20 space-y-10">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.5em] text-white/50">//skills</p>
        <h2 className="text-4xl font-extrabold sm:text-5xl">What I Build With</h2>
        <p className="max-w-3xl text-base text-white/70 sm:text-lg">
          Comfortable across the stack, but I lean backend — I like knowing exactly what happens between a request and a response.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur-xl transition hover:border-white/20 hover:bg-white/10">
            <div className={`mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm uppercase tracking-[0.28em] ${labelStyles[group.label]}`}>
              <span className="h-2.5 w-2.5 rounded-full bg-white/80" />
              {group.label}
            </div>
            <h3 className="text-2xl font-semibold text-white">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
