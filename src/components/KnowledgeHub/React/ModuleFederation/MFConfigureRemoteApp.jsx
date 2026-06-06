const MFConfigureRemoteApp = () => {
  return (
   <section className=" m-15 bg-slate-900 text-white p-4  rounded-xl shadow-2xl">
      <div>
        <h1 className="text-xl font-bold text-white">
          <span className="text-white">
            Step 1 - Configure Remote App
          </span>
        </h1>

        <p className="text-slate-300 mt-3">
          Expose components that can be consumed by other
          applications.
        </p>

        <div className="mt-4 bg-slate-800 rounded-xl p-4">
          <pre className="text-sm text-cyan-300 overflow-auto">
            {`new ModuleFederationPlugin({
  name: "dashboard",

  filename: "remoteEntry.js",

  exposes: {
    "./Dashboard":
      "./src/Dashboard"
  },

  shared: {
    react: {
      singleton: true
    },
    "react-dom": {
      singleton: true
    }
  }
});`}
          </pre>
        </div>
      </div>

      <div>
        <h1 className="text-xl font-bold text-white mt-6">
          <span className="text-white  mt-6">
            Step 2 - Configure Host App
          </span>
        </h1>

        <p className="text-slate-300 mt-3">
          Register remote applications that will be loaded
          dynamically at runtime.
        </p>

        <div className="mt-4 bg-slate-800 rounded-xl p-4">
          <pre className="text-sm text-cyan-300 overflow-auto">
            {`new ModuleFederationPlugin({
  remotes: {
    dashboard:
      "dashboard@http://localhost:3001/remoteEntry.js"
  }
});`}
          </pre>
        </div>
      </div>

      <div>
        <h1 className="text-xl font-bold text-white  mt-6">
          <span className="text-white ">
            Step 3 - Load Remote Component
          </span>
        </h1>

        <p className="text-slate-300 mt-3">
          Dynamically import and render the remote module.
        </p>

        <div className="mt-4 bg-slate-800 rounded-xl p-4">
          <pre className="text-sm text-cyan-300 overflow-auto">
            {`import React, {
  Suspense
} from "react";

const Dashboard =
  React.lazy(
    () => import("dashboard/Dashboard")
  );

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Dashboard />
    </Suspense>
  );
}`}
          </pre>
        </div>
      </div>

      <div>
        <h1 className="text-xl font-bold text-white  mt-6">
          <span className="text-white">
            Enterprise Architecture Example
          </span>
        </h1>

        <p className="text-slate-300 mt-3">
          Example of a large-scale ERP application using
          Microfrontends and Module Federation.
        </p>

        <div className="mt-4 bg-slate-950 border border-cyan-500/30 rounded-xl p-4">
          <pre className="text-cyan-300 overflow-auto">
            {`ERP Portal (Host)

├── Login App
├── Customer Management
├── Inventory Module
├── Sales Module
├── Reports Module
└── Admin Module

All deployed independently
using Module Federation`}
          </pre>
        </div>

        <ul className="space-y-3 text-slate-300 mt-5">
          <li>✅ Independent Teams</li>
          <li>✅ Independent CI/CD Pipelines</li>
          <li>✅ Faster Production Releases</li>
          <li>✅ Reduced Deployment Risk</li>
          <li>✅ Scalable Enterprise Architecture</li>
        </ul>
      </div>
    </section>
  )
}
export default MFConfigureRemoteApp