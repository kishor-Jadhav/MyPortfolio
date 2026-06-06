const ReactSiblingCommunication = () => {
    return (
        <section className="m-15 bg-slate-900 text-white p-4 rounded-xl shadow-2xl">
            <h1 className="text-xl font-bold text-white">
                <span className="text-white">
                    Sibling Communication
                </span>
            </h1>

            <p className="text-slate-300 mt-3">
                Sibling components communicate through a shared parent state.
            </p>

            <pre className="mt-4 bg-slate-800 p-4 rounded-xl text-cyan-300">
                {`function Parent() {
  const [search, setSearch] = useState('');

  return (
    <>
      <SearchBox
        onSearch={setSearch}
      />

      <UserList
        search={search}
      />
    </>
  );
}`}
            </pre>

            <ul className="mt-5 text-slate-300 space-y-2">
                <li>✅ Search Filters</li>
                <li>✅ Dashboard Widgets</li>
                <li>✅ Shared Form Data</li>
            </ul>
        </section >
    )
}

export default ReactSiblingCommunication;