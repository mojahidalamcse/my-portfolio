interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

interface ExperienceItem {
  position: string;
  company: string;
  period: string;
  type: "FULL-TIME" | "INTERNSHIP";
}

export function Experience() {
  const education: EducationItem[] = [
    {
      degree: "B.Sc. in Computer Science & Engineering",
      institution: "Bangladesh University of Business and Technology (BUBT)",
      period: "2020 — Present",
    },
    {
      degree: "Higher Secondary Certificate (H.S.C)",
      institution: "Kurirgam Collectorate School and College,(KCSC)",
      period: "2020 — 2022",
    },
    {
      degree: "Secondary School Certificate (S.S.C)",
      institution: "Dhaka Residential Model College, Dhaka",
      period: "2016 — 2018",
    },
  ];

  const professional: ExperienceItem[] = [
    {
      position: "Software Engineer (Backend)",
      company: "Pathao",
      period: "Jun 2024 — Present",
      type: "FULL-TIME",
    },
    {
      position: "Junior Software Engineer",
      company: "Brain Station 23, Dhaka",
      period: "Oct 2023 — May 2024",
      type: "FULL-TIME",
    },
    {
      position: "Software Engineering Intern",
      company: "Therap Services",
      period: "Jun 2023 — Aug 2023",
      type: "INTERNSHIP",
    },
  ];

  return (
    <section id="experience" className="mt-20 space-y-10">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.5em] text-white/50">{"//"} EXPERIENCE</p>
        <h2 className="text-4xl font-extrabold sm:text-5xl">
          Education & Professional Experience Timeline
        </h2>
        <p className="max-w-3xl text-base text-white/70 sm:text-lg">
          Two branches of the same commit history — classroom and codebase, growing side by side.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {/* Academic Journey */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur-xl">
          <h3 className="text-2xl font-semibold text-white mb-6">Academic Journey</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index}>
                <p className="text-sm text-white/60">{edu.degree}</p>
                <p className="font-semibold text-lg text-white mt-1">{edu.institution}</p>
                <p className="text-sm text-white/50 mt-2">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Experience */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur-xl">
          <h3 className="text-2xl font-semibold text-white mb-6">Professional Experience</h3>
          <div className="space-y-6">
            {professional.map((exp, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold text-lg text-white">{exp.position}</p>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-[0.2em] ${
                      exp.type === "FULL-TIME"
                        ? "bg-sky-200/20 text-sky-200"
                        : "bg-orange-200/20 text-orange-200"
                    }`}
                  >
                    {exp.type}
                  </span>
                </div>
                <p className="text-sm text-white/60">{exp.company}</p>
                <p className="text-sm text-white/50 mt-2">{exp.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
