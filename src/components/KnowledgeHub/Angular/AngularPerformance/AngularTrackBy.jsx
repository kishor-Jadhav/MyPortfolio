const AngularTrackBy = () => {
    return (
        <section className="m-15 bg-slate-900 text-white p-4 rounded-xl shadow-2xl">

            <h1 className="text-xl font-bold text-white">
                <span className="text-yellow-400">
                    TrackBy Function
                </span>
            </h1>

            <p className="text-slate-300 mt-3">
                Prevents Angular from recreating DOM elements when list data changes.
            </p>

            <pre className="mt-4 bg-slate-800 p-4 rounded-xl text-cyan-300">
                {`<li
 *ngFor="
 let user of users;
 trackBy: trackById
">
 {{ user.name }}
</li>

trackById(
 index:number,
 user:any
){
 return user.id;
}`}
            </pre>

            <ul className="mt-5 text-slate-300 space-y-2">
                <li>✅ Faster List Rendering</li>
                <li>✅ Reduced DOM Updates</li>
                <li>✅ Large Tables</li>
            </ul>

        </section>
    )
}
export default AngularTrackBy;