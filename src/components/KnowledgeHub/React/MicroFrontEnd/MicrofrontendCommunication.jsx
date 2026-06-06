const MicroFrontendCommunication = () => {
  return (
    <section className=" m-15 bg-slate-900 text-white p-4  rounded-xl shadow-2xl">
      <h1 className="text-xl font-bold text-white">
        <span className="text-white">
          Communication Between Microfrontends
        </span>
      </h1>

      <p className="text-slate-300 mt-3">
        Independent applications often need to exchange information
        such as authentication status, user preferences, and events.
      </p>

      <div className="mt-4 bg-slate-800 rounded-xl p-4">
        <pre className="text-sm text-cyan-300 overflow-auto">
          {`// Publish Event

window.dispatchEvent(
  new CustomEvent('userChanged', {
    detail: user
  })
);

// Subscribe Event

window.addEventListener(
  'userChanged',
  (event) => {
    console.log(event.detail);
  }
);`}
        </pre>
      </div>

      <ul className="space-y-3 text-slate-300 mt-5">
        <li>✅ Custom Events</li>
        <li>✅ Shared State</li>
        <li>✅ Message Bus Pattern</li>
        <li>✅ Loose Coupling</li>
      </ul>
    </section>
  );
};

export default MicroFrontendCommunication;