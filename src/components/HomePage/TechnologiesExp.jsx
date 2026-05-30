const techCategories = [
  {
    category: "Frontend Development",
    skills: [
      "Angular",
      "React.js",
      "TypeScript",
      "JavaScript",
      "RxJS",
      "NgRx",
      "Redux",
      "Tailwind CSS",
      "Bootstrap",
      "PrimeNG",
      "Kendo UI",
    ],
  },
  {
    category: "Backend Development",
    skills: [
      "Spring Boot",
      "Java",
      "REST APIs",
      "JWT Authentication",
    ],
  },
  {
    category: "Database Technologies",
    skills: [
      "SQL Server",
      "MySQL",
      "Stored Procedures",
      "Crystal Reports",
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      "AWS",
      "Git",
      "GitHub",
      "CI/CD",
      "Jenkins",
    ],
  },
  {
    category: "Data Science & Analytics",
    skills: [
      "Data Science",
      "Machine Learning",
      "TensorFlow",
      "Data Visualization",
    ],
  },
];

const TechnologiesExp = () => {
  return (
    <section
      id="technologies"
      className="py-20 px-6 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p className="text-cyan-400 text-2xl uppercase tracking-[0.35em]">
            Technologies & Expertise
          </p>           

          <p className="text-slate-400 mt-4 max-w-3xl leading-7">
            A diverse technology portfolio spanning modern front-end
            frameworks, enterprise application development, cloud
            technologies, database systems, and data-driven solutions built
            over 12+ years of professional experience.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {techCategories.map((group) => (
            <div
              key={group.category}
              className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 transition-all duration-300 hover:border-cyan-500 hover:-translate-y-1"
            >
              <h3 className="text-cyan-400 text-xl font-semibold mb-5">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-slate-800 text-slate-300 rounded-full text-sm hover:bg-cyan-500 hover:text-white transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Experience Summary */}
        
      </div>
    </section>
  );
};

export default TechnologiesExp;