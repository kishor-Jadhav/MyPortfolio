const ReactParentCallingChildMethods = () => {
  return (
    <section className="m-15 bg-slate-900 text-white p-4 rounded-xl shadow-2xl">

      <h1 className="text-xl font-bold text-white">
        <span className="text-white">
          Parent Calling Child Methods
        </span>
      </h1>

      <p className="text-slate-300 mt-3">
        Using forwardRef and useImperativeHandle, a parent component can
        invoke methods exposed by a child component.
      </p>

      <div className="mt-4 bg-slate-800 rounded-xl p-4">
        <pre className="text-sm text-cyan-300 overflow-auto">
{`// Child

const Child = forwardRef(
 (props, ref) => {

  const openModal = () => {
    console.log('Opened');
  };

  useImperativeHandle(
    ref,
    () => ({
      openModal
    })
  );

  return <div />;
 });

// Parent

const childRef =
  useRef();

<button
 onClick={() =>
  childRef.current.openModal()
 }>
 Open Modal
</button>

<Child ref={childRef} />`}
        </pre>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-5">
        <ul className="space-y-3 text-slate-300">
          <li>✅ Open Dialogs</li>
          <li>✅ Reset Forms</li>
          <li>✅ Trigger Validation</li>
        </ul>

        <ul className="space-y-3 text-slate-300">
          <li>✅ Focus Inputs</li>
          <li>✅ Custom Components</li>
          <li>✅ Third-Party Libraries</li>
        </ul>
      </div>

    </section>
  );
};

export default ReactParentCallingChildMethods;