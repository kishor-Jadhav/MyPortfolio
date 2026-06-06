const TanstackReactExample = () => {
    return (
         <section className=" m-15 bg-slate-900 text-white p-4  rounded-xl shadow-2xl">
                <h1 className="text-xl font-bold text-white">
                    <span className="txt-white">
                        Complete TanStack Query Implementation
                    </span>
                </h1>

                <p className="text-slate-300 mt-3">
                    A real-world example demonstrating data fetching, caching,
                    loading states, error handling, mutations, and automatic
                    query invalidation.
                </p>

                <div className="mt-4 bg-slate-800 rounded-xl p-4">
                    <pre className="text-sm text-cyan-300 overflow-auto">
                        {`import {
  useQuery,
  useMutation,
  useQueryClient
} from '@tanstack/react-query';

const fetchUsers = async () => {
  const response = await fetch('/api/users');

  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }

  return response.json();
};

const createUser = async (user) => {
  const response = await fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });

  return response.json();
};

export default function Users() {
  const queryClient = useQueryClient();

  const {
    data: users,
    isLoading,
    error
  } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    staleTime: 60000,
    gcTime: 300000
  });

  const mutation = useMutation({
    mutationFn: createUser,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['users']
      });
    }
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading users</p>;
  }

  return (
    <div>
      <button
        onClick={() =>
          mutation.mutate({
            name: 'Kishor'
          })
        }
      >
        Add User
      </button>

      <ul>
        {users?.map(user => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}`}
                    </pre>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-5">
                    <ul className="space-y-3 text-slate-300">
                        <li>✅ useQuery for Data Fetching</li>
                        <li>✅ useMutation for Updates</li>
                        <li>✅ Automatic Caching</li>
                        <li>✅ Loading & Error States</li>
                    </ul>

                    <ul className="space-y-3 text-slate-300">
                        <li>✅ Query Invalidation</li>
                        <li>✅ staleTime Configuration</li>
                        <li>✅ gcTime Configuration</li>
                        <li>✅ Server State Management</li>
                    </ul>
                </div>
            </section>
    )
}
export default TanstackReactExample;