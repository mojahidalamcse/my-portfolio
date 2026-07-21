export interface SkillCategory {
  Sub_title: string
  Title: string
  Skills: string[]
}

export interface SkillData {
  section_title: string
  sec_sub_title: string
  Skills: SkillCategory[]
}

export const skillData: SkillData = {
  section_title: 'What I Build With',
  sec_sub_title:
    'Comfortable across the stack, but I lean backend — I like knowing exactly what happens between a request and a response.',
  Skills: [
    {
      Sub_title: 'Core',
      Title: 'Language',
      Skills: ['C++', 'Python', 'Java', 'JavaScript', 'TypeScript', 'C']
    },
    {
      Sub_title: 'Web',
      Title: 'Web Development',
      Skills: ['Node.js', 'Express.js', 'React', 'Next.js', 'Tailwind CSS', 'REST APIs']
    },
    {
      Sub_title: 'Data',
      Title: 'Databases',
      Skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'Redis (basics)']
    },
    {
      Sub_title: 'ML',
      Title: 'Data & ML',
      Skills: ['Pandas', 'NumPy', 'scikit-learn', 'Matplotlib']
    },
    {
      Sub_title: 'Tools',
      Title: 'Tools & Platforms',
      Skills: ['Git & GitHub', 'Linux', 'Docker (basics)', 'Postman', 'Figma']
    },
    {
      Sub_title: 'CS',
      Title: 'CS Fundamentals',
      Skills: ['Data Structures', 'Algorithms', 'OOP', 'DBMS', 'Operating Systems']
    }
  ]
}
