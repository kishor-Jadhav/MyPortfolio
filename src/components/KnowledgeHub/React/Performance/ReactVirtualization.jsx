const ReactVirtualization = () => {
    return (
        <section id="react-virtualization" className="m-15 bg-slate-900 text-white p-4 rounded-xl shadow-2xl">
            <h1 className="text-2xl font-bold mb-4">
                Virtualization — Render Only Visible Rows
            </h1>

            <p className="text-slate-300 text-lg mb-10">
                Improves performance when displaying thousands of records.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <div className="inline-block bg-red-500 px-6 py-2 rounded-xl font-semibold mb-4">
                        BAD
                    </div>

                    <div className="bg-slate-800 rounded-2xl p-6 font-mono text-sm">
                        <pre>{`items.map(item =>
 <Row />
)`}</pre>
                    </div>
                </div>

                <div>
                    <div className="inline-block bg-emerald-500 px-6 py-2 rounded-xl font-semibold mb-4">
                        GOOD
                    </div>

                    <div className="bg-slate-800 rounded-2xl p-6 font-mono text-sm">
                        <pre>{`<FixedSizeList
 itemCount={10000}
 itemSize={35}
/>`}</pre>
                    </div>
                </div>
            </div>

            <div className="mt-10">
                <h2 className="text-yellow-400 text-2xl font-bold mb-4">
                    🔑 Key Points
                </h2>

                <ul className="space-y-3 text-slate-300 text-lg">
                    <li>• Renders only visible items.</li>
                    <li>• Ideal for large tables and lists.</li>
                    <li>• Greatly reduces DOM nodes.</li>
                </ul>
            </div>
        </section>
    )
}

export default ReactVirtualization;