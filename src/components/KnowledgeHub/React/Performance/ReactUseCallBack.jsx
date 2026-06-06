const ReactUseCallback = () => {
    return (
        <section id="react-usecallback" className="m-15 bg-slate-900 text-white p-4 rounded-xl shadow-2xl">
            
            <p className="text-slate-300 text-lg mb-10">
                Prevents unnecessary recreation of functions between renders.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <div className="inline-block bg-red-500 px-6 py-2 rounded-xl font-semibold mb-4">
                        BAD
                    </div>

                    <div className="bg-slate-800 rounded-2xl p-6 font-mono text-sm">
                        <pre>{`<Button
 onClick={() => saveData()}
/>`}</pre>
                    </div>
                </div>

                <div>
                    <div className="inline-block bg-emerald-500 px-6 py-2 rounded-xl font-semibold mb-4">
                        GOOD
                    </div>

                    <div className="bg-slate-800 rounded-2xl p-6 font-mono text-sm">
                        <pre>{`const handleSave =
 useCallback(() => {
   saveData();
 }, []);

<Button
 onClick={handleSave}
/>`}</pre>
                    </div>
                </div>
            </div>

            <div className="mt-10">
                <h2 className="text-yellow-400 text-2xl font-bold mb-4">
                    🔑 Key Points
                </h2>

                <ul className="space-y-3 text-slate-300 text-lg">
                    <li>• Keeps function reference stable.</li>
                    <li>• Works well with React.memo.</li>
                    <li>• Useful for child components receiving callbacks.</li>
                </ul>
            </div>
        </section>
    )
}
export default ReactUseCallback;