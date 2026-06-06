const AngularStandaloneComponents = () => {
return(
    <section className="m-15 bg-slate-900 text-white p-4 rounded-xl shadow-2xl">

  <h1 className="text-xl font-bold text-white">
    <span className="text-yellow-400">
      Standalone Components
    </span>
  </h1>

  <p className="text-slate-300 mt-3">
    Reduce NgModule overhead and improve tree shaking.
  </p>

  <pre className="mt-4 bg-slate-800 p-4 rounded-xl text-cyan-300">
{`@Component({
 standalone: true,
 imports: [
  CommonModule
 ]
})
export class UserComponent {}`}
  </pre>

  <ul className="mt-5 text-slate-300 space-y-2">
    <li>✅ Smaller Bundles</li>
    <li>✅ Simpler Architecture</li>
    <li>✅ Angular 17 Standard</li>
  </ul>

</section>
)
}
export default AngularStandaloneComponents;