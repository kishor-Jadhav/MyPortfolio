const AngularSignals = () => {
return(
    <section className="m-15 bg-slate-900 text-white p-4 rounded-xl shadow-2xl">

  <h1 className="text-xl font-bold text-white">
    <span className="text-yellow-400">
      Signals
    </span>
  </h1>

  <p className="text-slate-300 mt-3">
    Fine-grained reactivity without triggering full component checks.
  </p>

  <pre className="mt-4 bg-slate-800 p-4 rounded-xl text-cyan-300">
{`count = signal(0);

increment() {
 this.count.update(
  value => value + 1
 );
}`}
  </pre>

  <ul className="mt-5 text-slate-300 space-y-2">
    <li>✅ Better Than Zone.js Updates</li>
    <li>✅ Reactive State</li>
    <li>✅ Angular 17+ Recommended</li>
  </ul>

</section>
)
}
export default AngularSignals;