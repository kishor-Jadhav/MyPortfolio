const WhyTanstack = () => {
    return (
        <section id="why-tanstack" className=" m-15 bg-slate-900 text-white p-4  rounded-xl shadow-2xl">
            <div >
                <h1 className="text-xl font-bold txt-white  ">
                    <span className="text-white">Why TanStack Query?
                    </span>
                </h1>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div>
                        <ul className="space-y-3 text-slate-300">
                            <li>✅ Automatic Caching</li>
                            <li>✅ Background Refetching</li>
                            <li>✅ Request Deduplication</li>
                            <li>✅ Optimistic Updates</li>
                        </ul>
                    </div>

                    <div>
                        <ul className="space-y-3 text-slate-300">
                            <li>✅ Pagination & Infinite Queries</li>
                            <li>✅ Retry Mechanism</li>
                            <li>✅ Loading & Error States</li>
                            <li>✅ DevTools Support</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-6">

                <h1 className="text-xl font-bold txt-white  ">
                    <span className="text-white ">React Query vs TanStack Query
                    </span>
                </h1>

                <div className="overflow-auto mt-6">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-slate-700">
                                <th className="text-left py-3">Feature</th>
                                <th className="text-left py-3 text-orange-400">
                                    React Query v3
                                </th>
                                <th className="text-left py-3 text-emerald-400">
                                    TanStack Query v5
                                </th>
                            </tr>
                        </thead>

                        <tbody className="text-slate-300">
                            <tr className="border-b border-slate-800">
                                <td className="py-3">Package</td>
                                <td>react-query</td>
                                <td>@tanstack/react-query</td>
                            </tr>

                            <tr className="border-b border-slate-800">
                                <td className="py-3">Framework Support</td>
                                <td>React Only</td>
                                <td>React, Angular, Vue, Svelte</td>
                            </tr>

                            <tr className="border-b border-slate-800">
                                <td className="py-3">Cache Time</td>
                                <td>cacheTime</td>
                                <td>gcTime</td>
                            </tr>

                            <tr className="border-b border-slate-800">
                                <td className="py-3">Loading State</td>
                                <td>isLoading</td>
                                <td>isLoading + isFetching</td>
                            </tr>

                            <tr>
                                <td className="py-3">Bundle Size</td>
                                <td>~13 KB</td>
                                <td>~12 KB</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="mt-6">

                <h1 className="text-xl font-bold txt-white  ">
                    <span className="text-white ">Setup Query Client
                    </span>
                </h1>

                <div className="bg-slate-800 rounded-2xl p-6 font-mono text-sm overflow-auto mt-6">
                    <pre>{`npm install @tanstack/react-query

const queryClient = new QueryClient();

<QueryClientProvider client={queryClient}>
  <App />
</QueryClientProvider>`}</pre>
                </div>
            </div>
        </section>


    )
}
export default WhyTanstack;