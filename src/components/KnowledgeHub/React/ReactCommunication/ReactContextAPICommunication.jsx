const ReactContextAPICommunication = () => {
  return (
    <section className="m-15 bg-slate-900 text-white p-4 rounded-xl shadow-2xl">

      <h1 className="text-xl font-bold text-white">
        <span className="text-white">
          React Context API
        </span>
      </h1>

      <p className="text-slate-300 mt-3">
        Context API eliminates prop drilling by making data available
        across deeply nested components.
      </p>

      <div className="mt-4 bg-slate-800 rounded-xl p-4">
        <pre className="text-sm text-cyan-300 overflow-auto">
{`const UserContext =
  createContext();

<UserContext.Provider
  value={user}
>
  <Dashboard />
</UserContext.Provider>

function Profile() {
  const user =
    useContext(UserContext);

  return <h1>{user.name}</h1>;
}`}
        </pre>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-5">
        <ul className="space-y-3 text-slate-300">
          <li>✅ Avoid Prop Drilling</li>
          <li>✅ Auth Information</li>
          <li>✅ Theme Management</li>
        </ul>

        <ul className="space-y-3 text-slate-300">
          <li>✅ Language Settings</li>
          <li>✅ User Preferences</li>
          <li>✅ Global Data Access</li>
        </ul>
      </div>

    </section>
  );
};

export default ReactContextAPICommunication;