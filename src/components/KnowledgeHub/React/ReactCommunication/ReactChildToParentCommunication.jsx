 
    const ReactChildToParentCommunication = () => {
  return (
    <section className="m-15 bg-slate-900 text-white p-4 rounded-xl shadow-2xl">

      <h1 className="text-xl font-bold text-white">
        <span className="text-white">
          Child → Parent Communication (Callbacks)
        </span>
      </h1>

      <p className="text-slate-300 mt-3">
        Child components communicate with parents by invoking callback
        functions passed as props.
      </p>

      <div className="mt-4 bg-slate-800 rounded-xl p-4">
        <pre className="text-sm text-cyan-300 overflow-auto">
{`function Parent() {

  const handleSave = (user) => {
    console.log(user);
  };

  return (
    <UserForm
      onSave={handleSave}
    />
  );
}

function UserForm({ onSave }) {

  return (
    <button
      onClick={() =>
        onSave({
          name: 'Kishor'
        })
      }
    >
      Save
    </button>
  );
}`}
        </pre>
      </div>

      <ul className="space-y-3 text-slate-300 mt-5">
        <li>✅ Event Driven Communication</li>
        <li>✅ Parent State Updates</li>
        <li>✅ Form Submission Pattern</li>
        <li>✅ Reusable Components</li>
      </ul>

    </section>
  );
};

export default ReactChildToParentCommunication;