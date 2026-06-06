const ReactMemoCard = () => {
  return (
    <>
      {/* React.memo */}
      <section id="react-memo" className=" m-15 bg-slate-900 text-white p-4  rounded-xl shadow-2xl">
        

        <p className="text-slate-300 text-lg mb-10">
          Wraps a component so it only re-renders when its props change
          (shallow comparison).
        </p>

        {/* Comparison Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* BAD */}
          <div>
            <div className="inline-block bg-red-500 text-white px-6 py-2 rounded-xl font-semibold mb-4">
              BAD
            </div>

            <div className="bg-slate-800 rounded-2xl p-6 font-mono text-sm overflow-auto">
              <pre>{`// ❌ Without React.memo
const ListItem = ({ item }) => {
  console.log("Rendering:", item.name);

  return <li>{item.name}</li>;
};`}</pre>
            </div>
          </div>

          {/* GOOD */}
          <div>
            <div className="inline-block bg-emerald-500 text-white px-6 py-2 rounded-xl font-semibold mb-4">
              GOOD
            </div>

            <div className="bg-slate-800 rounded-2xl p-6 font-mono text-sm overflow-auto">
              <pre>{`// ✅ With React.memo
const ListItem = React.memo(({ item }) => {
  console.log("Rendering:", item.name);

  return <li>{item.name}</li>;
});`}</pre>
            </div>
          </div>
        </div>

        {/* Key Points */}
        <div className="mt-10">
          <h2 className="text-yellow-400 text-2xl font-bold mb-4">
            🔑 Key Points
          </h2>

          <ul className="space-y-3 text-slate-300 text-lg">
            <li>
              • Shallow comparison by default — works with primitives and stable
              references.
            </li>

            <li>
              • Custom comparator:
              <span className="text-cyan-400">
                {" "}
                React.memo(Component, arePropsEqual)
              </span>
            </li>

            <li>
              • Does NOT help if new object, array, or function references are
              passed on every render.
            </li>
          </ul>
        </div>
      </section>
     
    </>
  );
};

export default ReactMemoCard;