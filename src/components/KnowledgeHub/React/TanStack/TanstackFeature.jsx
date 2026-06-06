const TanStackFeature = () => {
    return (
        <section className=" m-15 bg-slate-900 text-white p-4  rounded-xl shadow-2xl">
            <div>
                <h1 className="text-xl font-bold text-white">
                    <span className="txt-white">
                        Query Keys — Cache Identity
                    </span>
                </h1>

                <p className="text-slate-300 mt-3">
                    Query keys uniquely identify cached data. Different keys create
                    different cache entries.
                </p>

                <div className="mt-4 bg-slate-800 rounded-xl p-4">
                    <pre className="text-sm text-cyan-300 overflow-auto">
                        {`useQuery({
  queryKey: ['user', userId],
  queryFn: () => fetchUser(userId)
});`}
                    </pre>
                </div>

                <div className="mt-5">
                    <ul className="space-y-3 text-slate-300">
                        <li>✅ Unique Cache Identity</li>
                        <li>✅ Supports Dynamic Parameters</li>
                        <li>✅ Enables Automatic Refetching</li>
                        <li>✅ Shared Cache Across Components</li>
                    </ul>
                </div>
            </div>
            <div className="mt-6">
                <h1 className="text-xl font-bold text-white">
                    <span className="txt-white">
                        useMutation — Create, Update & Delete
                    </span>
                </h1>

                <p className="text-slate-300 mt-">
                    Handles server-side modifications such as POST, PUT, PATCH,
                    and DELETE operations.
                </p>

                <div className="mt-4 bg-slate-800 rounded-xl p-4">
                    <pre className="text-sm text-cyan-300 overflow-auto">
                        {`const mutation = useMutation({
  mutationFn: createUser,
});

mutation.mutate({
  name: 'Kishor'
});`}
                    </pre>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-5">
                    <ul className="space-y-3 text-slate-300">
                        <li>✅ Create Records</li>
                        <li>✅ Update Records</li>
                        <li>✅ Delete Records</li>
                    </ul>

                    <ul className="space-y-3 text-slate-300">
                        <li>✅ Success Callbacks</li>
                        <li>✅ Error Handling</li>
                        <li>✅ Optimistic Updates</li>
                    </ul>
                </div>
            </div>
            <div className="mt-6">
                <h1 className="text-xl font-bold text-white">
                    <span className="txt-white">
                        Query Invalidation
                    </span>
                </h1>

                <p className="text-slate-300 mt-3">
                    Refresh stale data after successful mutations to keep UI
                    synchronized with the server.
                </p>

                <div className="mt-4 bg-slate-800 rounded-xl p-4">
                    <pre className="text-sm text-cyan-300 overflow-auto">
                        {`const queryClient = useQueryClient();

queryClient.invalidateQueries({
  queryKey: ['users']
});`}
                    </pre>
                </div>

                <ul className="space-y-3 text-slate-300 mt-5">
                    <li>✅ Refresh Cached Data</li>
                    <li>✅ Keeps UI Up To Date</li>
                    <li>✅ Most Common Pattern After Mutations</li>
                    <li>✅ Works Across Components</li>
                </ul>
            </div>
            <div className="mt-6">
                <h1 className="text-xl font-bold text-white">
                    <span className="txt-white">
                        Pagination
                    </span>
                </h1>

                <p className="text-slate-300 mt-3">
                    Fetch large datasets page by page to improve performance
                    and reduce memory consumption.
                </p>

                <div className="mt-4 bg-slate-800 rounded-xl p-4">
                    <pre className="text-sm text-cyan-300 overflow-auto">
                        {`const { data } = useQuery({
  queryKey: ['users', page],
  queryFn: () => fetchUsers(page),
});`}
                    </pre>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-5">
                    <ul className="space-y-3 text-slate-300">
                        <li>✅ Server-Side Pagination</li>
                        <li>✅ Better Performance</li>
                        <li>✅ Faster Rendering</li>
                    </ul>

                    <ul className="space-y-3 text-slate-300">
                        <li>✅ Reduced Memory Usage</li>
                        <li>✅ Cache Per Page</li>
                        <li>✅ Smooth User Experience</li>
                    </ul>
                </div>
            </div>
            <div className="mt-6">
                <h1 className="text-xl font-bold text-white">
                    <span className="txt-white">
                        Infinite Query
                    </span>
                </h1>

                <p className="text-slate-300 mt-3">
                    Load data continuously using "Load More" buttons or
                    infinite scrolling experiences.
                </p>

                <div className="mt-4 bg-slate-800 rounded-xl p-4">
                    <pre className="text-sm text-cyan-300 overflow-auto">
                        {`const {
  data,
  fetchNextPage
} = useInfiniteQuery({
  queryKey: ['posts'],
  queryFn: fetchPosts,
});`}
                    </pre>
                </div>

                <div className="mt-5">
                    <ul className="space-y-3 text-slate-300">
                        <li>✅ Infinite Scrolling</li>
                        <li>✅ Social Feed Pattern</li>
                        <li>✅ Large Dataset Handling</li>
                        <li>✅ Optimized Network Usage</li>
                    </ul>
                </div>
            </div>
            <div className="mt-6">
                <h1 className="text-xl font-bold text-white">
                    <span className="txt-white">
                        Optimistic Updates
                    </span>
                </h1>

                <p className="text-slate-300 mt-3">
                    Update the UI immediately before the server confirms the action,
                    providing a fast and responsive user experience.
                </p>

                <div className="mt-4 bg-slate-800 rounded-xl p-4">
                    <pre className="text-sm text-cyan-300 overflow-auto">
                        {`onMutate: async (newUser) => {
  queryClient.setQueryData(
    ['users'],
    old => [...old, newUser]
  );
}`}
                    </pre>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-5">
                    <ul className="space-y-3 text-slate-300">
                        <li>✅ Instant UI Updates</li>
                        <li>✅ Better User Experience</li>
                        <li>✅ Reduced Waiting Time</li>
                    </ul>

                    <ul className="space-y-3 text-slate-300">
                        <li>✅ Rollback On Failure</li>
                        <li>✅ Common In Modern Apps</li>
                        <li>✅ Improves Perceived Performance</li>
                    </ul>
                </div>
            </div>
            <div className="mt-6">
                <h1 className="text-xl font-bold text-white">
                    <span className="txt-white">
                        Dependent Queries
                    </span>
                </h1>

                <p className="text-slate-300 mt-3">
                    Execute a query only after another query has successfully completed.
                    Perfect for chained API calls such as loading user details first and
                    then fetching orders, permissions, or profile information.
                </p>

                <div className="mt-4 bg-slate-800 rounded-xl p-4">
                    <pre className="text-sm text-cyan-300 overflow-auto">
                        {`const { data: user } = useQuery({
  queryKey: ['user'],
  queryFn: fetchCurrentUser
});

const { data: orders } = useQuery({
  queryKey: ['orders', user?.id],
  queryFn: () => fetchOrders(user.id),
  enabled: !!user
});`}
                    </pre>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-5">
                    <ul className="space-y-3 text-slate-300">
                        <li>✅ Automatic Query Chaining</li>
                        <li>✅ Conditional Execution</li>
                        <li>✅ Prevents Unnecessary Requests</li>
                    </ul>

                    <ul className="space-y-3 text-slate-300">
                        <li>✅ Cleaner Than useEffect Chains</li>
                        <li>✅ Built-in Loading States</li>
                        <li>✅ Independent Caching</li>
                    </ul>
                </div>
            </div>
            <div className="mt-6">
                <h1 className="text-xl font-bold text-white">
                    <span className="txt-white">
                        gcTime — Cache Garbage Collection
                    </span>
                </h1>

                <p className="text-slate-300 mt-3">
                    Controls how long inactive query data remains in memory before being
                    automatically removed. This helps balance application performance and
                    memory consumption.
                </p>

                <div className="mt-4 bg-slate-800 rounded-xl p-4">
                    <pre className="text-sm text-cyan-300 overflow-auto">
                        {`useQuery({
  queryKey: ['users'],
  queryFn: fetchUsers,
  gcTime: 5 * 60 * 1000 // 5 minutes
});`}
                    </pre>
                </div>

                <div className="mt-4 bg-slate-950 border border-slate-700 rounded-xl p-4">
                    <p className="text-slate-300 text-sm">
                        User visits Users page → Data is cached
                        <br />
                        User navigates away → Query becomes inactive
                        <br />
                        Returns within 5 minutes → Cached data is reused
                        <br />
                        After 5 minutes → Cache is automatically removed
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-5">
                    <ul className="space-y-3 text-slate-300">
                        <li>✅ Automatic Memory Cleanup</li>
                        <li>✅ Faster Back Navigation</li>
                        <li>✅ Reduces Network Requests</li>
                    </ul>

                    <ul className="space-y-3 text-slate-300">
                        <li>✅ Configurable Per Query</li>
                        <li>✅ Better Resource Management</li>
                        <li>✅ Improves User Experience</li>
                    </ul>
                </div>
            </div>

           
        </section>
    );
}

export default TanStackFeature;