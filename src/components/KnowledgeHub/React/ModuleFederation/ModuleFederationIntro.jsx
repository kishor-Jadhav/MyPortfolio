const ModuleFederationIntro = () => {
  return (
    <section className=" m-15 bg-slate-900 text-white p-4  rounded-xl shadow-2xl">
      <h1 className="text-xl font-bold text-white">
        <span className="text-white">
          Module Federation
        </span>
      </h1>

      <p className="text-slate-300 mt-3">
        Module Federation is a Webpack feature that enables
        applications to dynamically share and consume code
        at runtime without rebuilding the entire application.
      </p>

      <div className="mt-4 bg-slate-950 border border-slate-700 rounded-xl p-4">
        <pre className="text-sm text-cyan-300 overflow-auto">
          {`Host Application

  ↓

Remote Applications

  ├── Dashboard
  ├── Customer
  ├── Reports
  └── Shared UI`}
        </pre>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-5">
        <ul className="space-y-3 text-slate-300">
          <li>✅ Runtime Integration</li>
          <li>✅ Shared Dependencies</li>
          <li>✅ Independent Releases</li>
        </ul>

        <ul className="space-y-3 text-slate-300">
          <li>✅ Reduced Bundle Size</li>
          <li>✅ Team Isolation</li>
          <li>✅ Faster Development</li>
        </ul>
      </div>
    </section>
  )
}

export default ModuleFederationIntro