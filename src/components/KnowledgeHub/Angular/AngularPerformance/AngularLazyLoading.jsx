const AngularLazyLoading = () => {
return (
<section className="m-15 bg-slate-900 text-white p-4 rounded-xl shadow-2xl">

  <h1 className="text-xl font-bold text-white">
    <span className="text-yellow-400">
      Lazy Loading
    </span>
  </h1>

  <p className="text-slate-300 mt-3">
    Load feature modules only when users navigate to them.
  </p>

  <pre className="mt-4 bg-slate-800 p-4 rounded-xl text-cyan-300">
{`{
 path: 'admin',
 loadChildren: () =>
 import('./admin/admin.module')
 .then(m => m.AdminModule)
}`}
  </pre>

  <ul className="mt-5 text-slate-300 space-y-2">
    <li>✅ Smaller Initial Bundle</li>
    <li>✅ Faster Startup</li>
    <li>✅ Better Lighthouse Score</li>
  </ul>

</section>
)
}
export default AngularLazyLoading;