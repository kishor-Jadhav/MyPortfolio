const HomePageEducation = () => {
  return (
    <section id="home-page-education" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-cyan-400 text-2xl uppercase tracking-[0.35em]">
            Education
          </p>

          <h3 className="text-3xl md:text-xl font-bold mt-2">
            Learning That Drives Innovation
          </h3>

          <p className="text-slate-400 mt-4 max-w-2xl leading-7">
            Combining technical expertise in Computer Science with advanced knowledge in Data Science to solve complex business challenges through technology.
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6">
              <p className="text-xl font-semibold">M.Tech – Data Science</p>
              <p className="text-slate-400 mt-1">BITS Pilani | 2022 – 2024</p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6">
              <p className="text-xl font-semibold">B.E – Computer Science</p>
              <p className="text-slate-400 mt-1">TKIET Warananagar | 2008 – 2012</p>
            </div>
          </div>
        </div>
      </section>
  );
};

export default HomePageEducation;