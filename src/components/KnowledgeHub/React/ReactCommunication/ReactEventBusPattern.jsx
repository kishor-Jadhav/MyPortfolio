const ReactEventBusPattern = () => {
    return (
        <section className="m-15 bg-slate-900 text-white p-4 rounded-xl shadow-2xl">
            <h1 className="text-xl font-bold text-white">
                <span className="text-white">
                    Event Bus Pattern
                </span>
            </h1>

            <p className="text-slate-300 mt-3">
                Components communicate through published events.
            </p>

            <pre className="mt-4 bg-slate-800 p-4 rounded-xl text-cyan-300">
                {`// Publisher

window.dispatchEvent(
  new CustomEvent(
    'userUpdated',
    {
      detail: user
    }
  )
);

// Subscriber

useEffect(() => {

  const handler = event => {
    console.log(event.detail);
  };

  window.addEventListener(
    'userUpdated',
    handler
  );

}, []);`}
            </pre>

            <ul className="mt-5 text-slate-300 space-y-2">
                <li>✅ Microfrontends</li>
                <li>✅ Module Federation</li>
                <li>✅ Decoupled Architecture</li>
            </ul>
        </section>
    );
};

export default ReactEventBusPattern;