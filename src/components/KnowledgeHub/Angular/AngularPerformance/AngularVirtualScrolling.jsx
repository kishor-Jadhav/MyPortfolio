const AngularVirtualScrolling = () => {
    return(
        <section className="m-15 bg-slate-900 text-white p-4 rounded-xl shadow-2xl">

            <h1 className="text-xl font-bold text-white">
                <span className="text-yellow-400">
                    Virtual Scrolling
                </span>
            </h1>

            <p className="text-slate-300 mt-3">
                Render only visible rows for huge datasets.
            </p>

            <pre className="mt-4 bg-slate-800 p-4 rounded-xl text-cyan-300">
                {`<cdk-virtual-scroll-viewport
 itemSize="50">

 <div
  *cdkVirtualFor="
   let item of users
  ">
   {{ item.name }}
 </div>

</cdk-virtual-scroll-viewport>`}
            </pre>

            <ul className="mt-5 text-slate-300 space-y-2">
                <li>✅ 10,000+ Records</li>
                <li>✅ Faster Rendering</li>
                <li>✅ Reduced Memory Usage</li>
            </ul>

        </section>
    )
}
export default AngularVirtualScrolling;