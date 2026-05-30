 const projects = [
  {
    title: "Digital Experience Platform",
    description:
      "Architected responsive web applications using Angular and React with a focus on performance, accessibility, and seamless user experience.",
  },
  {
    title: "Business Intelligence Dashboard",
    description:
      "Delivered data-driven insights through advanced dashboards, custom reports, and visualization components for executive decision-making.",
  },
  {
    title: "Enterprise ERP Solution",
    description:
      "Built scalable business modules integrating Spring Boot, SQL Server, and modern UI frameworks to streamline operational workflows.",
  },
  {
    title: "Cloud-Ready Application Upgrade",
    description:
      "Modernized legacy systems through framework upgrades, code optimization, security remediation, and CI/CD adoption.",
  },
];

const renderCards = (items, isProject = false) => {
  return items.map((item, index) => {
    if (isProject) {
      return (
        <div
          key={`${item.title}-${index}`}
          className="min-w-[220px] bg-slate-900/90 border border-slate-700 rounded-3xl p-6 shadow-xl text-left"
        >
          <p className="text-cyan-400 font-semibold">{item.title}</p>
          <p className="text-slate-300 mt-3 text-sm leading-6">{item.description}</p>
        </div>
      );
    }

    return (
      <div
        key={`${item}-${index}`}
        className="min-w-[160px] bg-slate-900/90 border border-slate-700 rounded-3xl p-6 shadow-xl flex items-center justify-center text-xl font-semibold text-white"
      >
        {item}
      </div>
    );
  });
};
const ProfessionalHighlights = () => {
  return (
    <section className="px-6 bg-slate-950/90" id="home-page-professional-highlights">
      <div className="max-w-7xl mx-auto space-y-16">        

        <div className="space-y-4">
          <p className="text-cyan-400 text-2xl uppercase tracking-[0.25em]">Professional Highlights</p>
           
          <p className="text-slate-400 max-w-2xl leading-7">
            Selected projects demonstrating expertise in modern web development, system modernization, user experience optimization, and enterprise application delivery.
          </p>
        </div>

        <div className="overflow-hidden rounded-[36px] border border-slate-800 bg-slate-950/80 p-4">
          <div className="slider-track slider-slow flex gap-5">
            {renderCards(projects, true)}
            {renderCards(projects, true)}
          </div>
        </div>
      </div>
    </section>
  );
}
export default ProfessionalHighlights;