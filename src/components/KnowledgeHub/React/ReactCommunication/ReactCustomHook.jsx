const ReactCustomHook = () => {
    return (
        <section className="m-15 bg-slate-900 text-white p-4 rounded-xl shadow-2xl">
            <h1 className="text-xl font-bold text-white">
                <span className="text-white">
                    Custom Hooks
                </span>
            </h1>

            <p className="text-slate-300 mt-3">
                Reuse stateful logic across multiple components.
            </p>

            <pre className="mt-4 bg-slate-800 p-4 rounded-xl text-cyan-300">
                {`function useWindowWidth() {

  const [width, setWidth] =
    useState(window.innerWidth);

  useEffect(() => {

    const resize = () =>
      setWidth(window.innerWidth);

    window.addEventListener(
      'resize',
      resize
    );

    return () =>
      window.removeEventListener(
        'resize',
        resize
      );

  }, []);

  return width;
}`}
            </pre>

            <ul className="mt-5 text-slate-300 space-y-2">
                <li>✅ Reusable Logic</li>
                <li>✅ Cleaner Components</li>
                <li>✅ Shared Business Logic</li>
            </ul>

        </section>
    );
};

export default ReactCustomHook;