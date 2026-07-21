import { skillData } from '@/lib/data/skills'

const labelStyles: Record<string, string> = {
  Core: 'bg-violet-200/20 text-violet-200',
  Web: 'bg-orange-200/20 text-orange-200',
  Data: 'bg-pink-200/20 text-pink-200',
  ML: 'bg-emerald-200/20 text-emerald-200',
  Tools: 'bg-rose-200/20 text-rose-200',
  CS: 'bg-sky-200/20 text-sky-200'
}

export function SkillSection() {
  return (
    <section id="skills" className="mt-20 space-y-10">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.5em] text-white/50">skills</p>
        <h2 className="text-4xl font-extrabold sm:text-5xl">{skillData.section_title}</h2>
        <p className="max-w-3xl text-base text-white/70 sm:text-lg">
          {skillData.sec_sub_title}
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {skillData.Skills.map((group) => (
          <div
            key={group.Title}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur-xl transition hover:border-white/20 hover:bg-white/10"
          >
            <div
              className={`mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm uppercase tracking-[0.28em] ${
                labelStyles[group.Sub_title] || 'bg-white/10 text-white'
              }`}
            >
              <span className="h-2.5 w-2.5 rounded-full bg-white/80" />
              {group.Sub_title}
            </div>
            <h3 className="text-2xl font-semibold text-white">{group.Title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.Skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
