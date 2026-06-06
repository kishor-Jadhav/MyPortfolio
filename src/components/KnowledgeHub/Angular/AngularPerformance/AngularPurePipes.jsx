const AngularPurePipes = () => {
return (
<section className="m-15 bg-slate-900 text-white p-4 rounded-xl shadow-2xl">

  <h1 className="text-xl font-bold text-white">
    <span className="text-yellow-400">
      Pure Pipes
    </span>
  </h1>

  <p className="text-slate-300 mt-3">
    Execute transformation only when input values change.
  </p>

  <pre className="mt-4 bg-slate-800 p-4 rounded-xl text-cyan-300">
{`@Pipe({
 name:'search',
 pure:true
})
export class SearchPipe {}`}
  </pre>

  <ul className="mt-5 text-slate-300 space-y-2">
    <li>✅ Avoid Recalculation</li>
    <li>✅ Better Template Performance</li>
    <li>✅ Optimized Rendering</li>
  </ul>

</section>
)
}
export default AngularPurePipes;