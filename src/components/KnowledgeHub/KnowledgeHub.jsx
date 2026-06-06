import { Link } from "react-router-dom";

 
const KnowledgeHub = () => {
    return(
       <section
  id="knowledge-hub"
  className="py-20 px-6 bg-slate-950"
>
  <div className="max-w-7xl mx-auto">

    <div className="mb-12">
      <p className="text-cyan-400 text-2xl uppercase tracking-[0.35em]">
        Knowledge Hub
      </p>

      <h2 className="text-xl md:text-xl font-bold mt-3">
        Sharing Practical Engineering Insights
      </h2>

      <p className="text-slate-400 mt-4 max-w-3xl leading-7">
        Explore performance optimization techniques, architecture best
        practices, reusable code examples, and real-world solutions across
        Angular, React, Spring Boot, Python, and modern web development.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Card 1 */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-cyan-500 transition">
        <h3 className="text-xl font-semibold text-cyan-400">
          React Deep Dive
        </h3>

        <p className="mt-3 text-slate-400">
          React.memo, useMemo, useCallback, code splitting,
          lazy loading, virtualization and rendering optimization.
        </p>

        <Link to="/reactresources" className="mt-4 text-cyan-400">
          View Resources →
        </Link>
      </div>

      {/* Card 2 */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-cyan-500 transition">
        <h3 className="text-xl font-semibold text-cyan-400">
          Angular Deep Dive
        </h3>

        <p className="mt-3 text-slate-400">
          Change Detection, OnPush strategy,
          RxJS optimization, lazy loading and signals.
        </p>

        <Link to="/angularresources" className="mt-4 text-cyan-400">
          View Resources →
        </Link>
      </div>

      {/* Card 3 */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-cyan-500 transition">
        <h3 className="text-xl font-semibold text-cyan-400">
          GitHub Repositories
        </h3>

        <p className="mt-3 text-slate-400">
          Reusable components, coding patterns,
          interview preparation and enterprise solutions.
        </p>

        <Link to="/githubrepositories" className="mt-4 text-cyan-400">
          View Repositories →
        </Link>
      </div>

      {/* Card 4 */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-cyan-500 transition">
        <h3 className="text-xl font-semibold text-cyan-400">
          Database & SQL Solutions
        </h3>

        <p className="mt-3 text-slate-400">
          Security, JWT, JPA, Batch Processing,
          Reporting and API design patterns.
        </p>

        <Link to="/databasesqlresources" className="mt-4 text-cyan-400">
          View Resources →
        </Link>
      </div>

      {/* Card 5 */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-cyan-500 transition">
        <h3 className="text-xl font-semibold text-cyan-400">
          Python & Data Science
        </h3>

        <p className="mt-3 text-slate-400">
          Machine Learning, TensorFlow,
          Data Processing and Analytics examples.
        </p>

        <Link to="/pythonresources" className="mt-4 text-cyan-400">
          View Resources →
        </Link>
      </div>

      {/* Card 6 */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-cyan-500 transition">
        <h3 className="text-xl font-semibold text-cyan-400">
          Demo Projects
        </h3>

        <p className="mt-3 text-slate-400">
          Interactive demos showcasing
          modern UI patterns and enterprise architectures.
        </p>

        <Link to="/demoprojects" className="mt-4 text-cyan-400">
          Explore Demos →
        </Link>
      </div>
    </div>
  </div>
</section>
    );
}

export default KnowledgeHub;