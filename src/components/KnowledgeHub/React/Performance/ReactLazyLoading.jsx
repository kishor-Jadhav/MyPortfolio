const ReactLazyLoading = () => {
    return (
        <section id="react-usememo" className="m-15 bg-slate-900 text-white p-4 rounded-xl shadow-2xl">


            <p className="text-slate-300 text-lg mb-10">
                Reduce initial bundle size by loading components only when required.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <div className="inline-block bg-red-500 px-6 py-2 rounded-xl font-semibold mb-4">
                        BAD
                    </div>

                    <div className="bg-slate-800 rounded-2xl p-6 font-mono text-sm">
                        <pre>{`import Dashboard
 from "./Dashboard";`}</pre>
                    </div>
                </div>

                <div>
                    <div className="inline-block bg-emerald-500 px-6 py-2 rounded-xl font-semibold mb-4">
                        GOOD
                    </div>

                    <div className="bg-slate-800 rounded-2xl p-6 font-mono text-sm">
                        <pre>{`const Dashboard =
 React.lazy(() =>
  import("./Dashboard")
);`}</pre>
                    </div>
                </div>
            </div>

            <div className="mt-10">
                <h2 className="text-yellow-400 text-2xl font-bold mb-4">
                    🔑 Key Points
                </h2>

                <ul className="space-y-3 text-slate-300 text-lg">
                    <li>• Faster first page load.</li>
                    <li>• Smaller JavaScript bundles.</li>
                    <li>• Use with Suspense fallback.</li>
                </ul>
            </div>
        </section>
    )
}

export default ReactLazyLoading;    