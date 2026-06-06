const AnguarOnPush = () => {
return (
    <section className="m-15 bg-slate-900 text-white p-4 rounded-xl shadow-2xl">

  <h1 className="text-xl font-bold text-white">
    <span className="text-yellow-400">
      OnPush Change Detection
    </span>
  </h1>

  <p className="text-slate-300 mt-3">
    Reduces unnecessary component checks by running change detection
    only when @Input references change.
  </p>

  <pre className="mt-4 bg-slate-800 p-4 rounded-xl text-cyan-300">
{`@Component({
  selector: 'app-user',
  changeDetection:
    ChangeDetectionStrategy.OnPush
})
export class UserComponent {}`}
  </pre>

  <ul className="mt-5 text-slate-300 space-y-2">
    <li>✅ Faster Rendering</li>
    <li>✅ Large Applications</li>
    <li>✅ Reduced Change Detection Cycles</li>
  </ul>

</section>
)
}
export default AnguarOnPush;