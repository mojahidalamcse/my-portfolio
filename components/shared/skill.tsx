export function SkillSection() {
  return (
    <section id="skills" className="mt-24">
      <div className="space-y-6">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">// skills</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">What I build with</h2>
          <p className="mt-4 max-w-2xl text-lg text-white/70">
            Comfortable across the stack, but I lean backend — I like knowing exactly what happens between a request and a response.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white">
            <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/70">Core</span>
            <h3 className="mt-6 text-xl font-semibold">Languages</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {['C++', 'Python', 'Java', 'JavaScript', 'TypeScript', 'C'].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-black/10 px-3 py-2 text-sm text-white/80">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white">
            <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/70">Web</span>
            <h3 className="mt-6 text-xl font-semibold">Web Development</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {['Node.js', 'Express.js', 'React', 'Next.js', 'Tailwind CSS', 'REST APIs'].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-black/10 px-3 py-2 text-sm text-white/80">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white">
            <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/70">Data</span>
            <h3 className="mt-6 text-xl font-semibold">Databases</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {['MySQL', 'MongoDB', 'PostgreSQL', 'Redis'].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-black/10 px-3 py-2 text-sm text-white/80">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white">
            <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/70">ML</span>
            <h3 className="mt-6 text-xl font-semibold">Data & ML</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {['Pandas', 'NumPy', 'scikit-learn', 'Matplotlib'].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-black/10 px-3 py-2 text-sm text-white/80">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white">
            <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/70">Tools</span>
            <h3 className="mt-6 text-xl font-semibold">Tools & Platforms</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {['Git & GitHub', 'Linux', 'Docker', 'Postman', 'Figma'].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-black/10 px-3 py-2 text-sm text-white/80">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white">
            <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/70">CS</span>
            <h3 className="mt-6 text-xl font-semibold">CS Fundamentals</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {['Data Structures', 'Algorithms', 'OOP', 'DBMS', 'Operating Systems'].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-black/10 px-3 py-2 text-sm text-white/80">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      </section>
  );
}
