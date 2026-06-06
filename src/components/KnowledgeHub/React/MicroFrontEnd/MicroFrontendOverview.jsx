const MicroFrontendOverview = () => {
  return (
    <section className=" m-15 bg-slate-900 text-white p-4  rounded-xl shadow-2xl">
      <h1 className="text-xl font-bold text-white">
        <span className="text-white">
          Microfrontends Architecture
        </span>
      </h1>

      <p className="text-slate-300 mt-3">
        Microfrontends extend the microservices concept to the frontend.
        Large applications are divided into smaller, independently
        deployable applications owned by different teams.
      </p>

      <div className="mt-4 bg-slate-950 border border-slate-700 rounded-xl p-4">
        <pre className="text-sm text-cyan-300 overflow-auto">
          {`Portal Application

├── Authentication App
├── Dashboard App
├── Customer App
├── Orders App
└── Reports App`}
        </pre>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-5">
        <ul className="space-y-3 text-slate-300">
          <li>✅ Independent Deployments</li>
          <li>✅ Team Autonomy</li>
          <li>✅ Technology Flexibility</li>
        </ul>

        <ul className="space-y-3 text-slate-300">
          <li>✅ Faster Releases</li>
          <li>✅ Better Scalability</li>
          <li>✅ Reduced Application Size</li>
        </ul>
      </div>
    </section>
  )
}

export default MicroFrontendOverview