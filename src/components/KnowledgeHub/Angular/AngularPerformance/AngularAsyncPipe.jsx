const AngularAsyncPipe = () => {
return(
    <section className="m-15 bg-slate-900 text-white p-4 rounded-xl shadow-2xl">

  <h1 className="text-xl font-bold text-white">
    <span className="text-yellow-400">
      Async Pipe
    </span>
  </h1>

  <p className="text-slate-300 mt-3">
    Automatically subscribes and unsubscribes from observables.
  </p>

  <pre className="mt-4 bg-slate-800 p-4 rounded-xl text-cyan-300">
{`users$ =
 this.service.getUsers();

<div>
 {{ users$ | async }}
</div>`}
  </pre>

  <ul className="mt-5 text-slate-300 space-y-2">
    <li>✅ Memory Leak Prevention</li>
    <li>✅ Cleaner Code</li>
    <li>✅ Better RxJS Integration</li>
  </ul>

</section>
)
}
export default AngularAsyncPipe;