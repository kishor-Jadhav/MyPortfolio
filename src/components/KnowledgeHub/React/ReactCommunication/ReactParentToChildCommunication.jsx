const ReactParentToChildCommunication = () => { 
  
  return (
    <section className="m-15 bg-slate-900 text-white p-4 rounded-xl shadow-2xl">

      <h1 className="text-xl font-bold text-white">
        <span className="text-white">
          Parent → Child Communication (Props)
        </span>
      </h1>

      <p className="text-slate-300 mt-3">
        Props are the primary mechanism for passing data from a parent
        component to a child component. React follows a one-way data flow
        where information moves from parent to child.
      </p>

      <div className="mt-4 bg-slate-800 rounded-xl p-4">
        <pre className="text-sm text-cyan-300 overflow-auto">
{`// Parent Component

function Dashboard() {

  const user = {
    name: "Kishor",
    role: "Tech Lead"
  };

  return (
    <UserCard
      user={user}
    />
  );
}

// Child Component

function UserCard({ user }) {
  return (
    <>
      <h2>{user.name}</h2>
      <p>{user.role}</p>
    </>
  );
}`}
        </pre>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-5">
        <ul className="space-y-3 text-slate-300">
          <li>✅ One-way Data Flow</li>
          <li>✅ Easy To Understand</li>
          <li>✅ Reusable Components</li>
        </ul>

        <ul className="space-y-3 text-slate-300">
          <li>✅ Type Safety With TypeScript</li>
          <li>✅ Predictable Updates</li>
          <li>✅ Component Isolation</li>
        </ul>
      </div>

      <div className="mt-5 bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4">
        <h3 className="text-cyan-400 font-semibold mb-2">
          Real World Usage
        </h3>

        <p className="text-slate-300">
          Passing API response data to cards, tables, profile components,
          dashboards and reusable UI widgets.
        </p>
      </div>

    </section>
  );
 
}
export default ReactParentToChildCommunication;