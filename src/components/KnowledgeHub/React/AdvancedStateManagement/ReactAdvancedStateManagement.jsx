const ReactAdvancedStateManagement = () => {
  return (
    <section className="m-15 bg-slate-900 text-white p-4 rounded-xl shadow-2xl">

      <h1 className="text-xl font-bold text-white">
        <span className="text-yellow-400">
          Advanced State Management
        </span>
      </h1>

      <p className="text-slate-300 mt-3">
        Modern React applications use different state management strategies
        depending on complexity, scalability, and data ownership.
      </p>

      {/* Local State */}

      <div className="mt-8">
        <h2 className="text-cyan-400 font-semibold text-lg">
          Local Component State (useState)
        </h2>

        <p className="text-slate-300 mt-2">
          Best for UI-specific state that belongs to a single component.
        </p>

        <div className="mt-4 bg-slate-800 rounded-xl p-4">
          <pre className="text-sm text-cyan-300 overflow-auto">
{`const [count, setCount] =
  useState(0);

<button
 onClick={() =>
  setCount(count + 1)
 }>
 Increment
</button>`}
          </pre>
        </div>

        <ul className="mt-4 text-slate-300 space-y-2">
          <li>✅ Forms</li>
          <li>✅ Modals</li>
          <li>✅ UI Toggles</li>
        </ul>
      </div>

      {/* useReducer */}

      <div className="mt-10">
        <h2 className="text-cyan-400 font-semibold text-lg">
          Complex State (useReducer)
        </h2>

        <p className="text-slate-300 mt-2">
          Ideal when state transitions become complex.
        </p>

        <div className="mt-4 bg-slate-800 rounded-xl p-4">
          <pre className="text-sm text-cyan-300 overflow-auto">
{`function reducer(
 state,
 action
) {
  switch(action.type) {

    case 'increment':
      return {
        count:
        state.count + 1
      };

    default:
      return state;
  }
}

const [state, dispatch] =
 useReducer(
  reducer,
  { count: 0 }
 );`}
          </pre>
        </div>

        <ul className="mt-4 text-slate-300 space-y-2">
          <li>✅ Predictable Updates</li>
          <li>✅ Complex Forms</li>
          <li>✅ State Machines</li>
        </ul>
      </div>

      {/* Context API */}

      <div className="mt-10">
        <h2 className="text-cyan-400 font-semibold text-lg">
          Context API
        </h2>

        <p className="text-slate-300 mt-2">
          Share state across multiple component levels.
        </p>

        <div className="mt-4 bg-slate-800 rounded-xl p-4">
          <pre className="text-sm text-cyan-300 overflow-auto">
{`const ThemeContext =
 createContext();

<ThemeContext.Provider
 value={theme}
>
 <App />
</ThemeContext.Provider>

const theme =
 useContext(
  ThemeContext
 );`}
          </pre>
        </div>

        <ul className="mt-4 text-slate-300 space-y-2">
          <li>✅ Authentication</li>
          <li>✅ Themes</li>
          <li>✅ User Preferences</li>
        </ul>
      </div>

      {/* Redux Toolkit */}

      <div className="mt-10">
        <h2 className="text-cyan-400 font-semibold text-lg">
          Redux Toolkit
        </h2>

        <p className="text-slate-300 mt-2">
          Enterprise-grade centralized state management.
        </p>

        <div className="mt-4 bg-slate-800 rounded-xl p-4">
          <pre className="text-sm text-cyan-300 overflow-auto">
{`const user =
 useSelector(
  state => state.user
 );

const dispatch =
 useDispatch();

dispatch(
 setUser(data)
);`}
          </pre>
        </div>

        <ul className="mt-4 text-slate-300 space-y-2">
          <li>✅ Enterprise Apps</li>
          <li>✅ Large Teams</li>
          <li>✅ DevTools</li>
        </ul>
      </div>

      {/* Zustand */}

      <div className="mt-10">
        <h2 className="text-cyan-400 font-semibold text-lg">
          Zustand
        </h2>

        <p className="text-slate-300 mt-2">
          Lightweight alternative to Redux.
        </p>

        <div className="mt-4 bg-slate-800 rounded-xl p-4">
          <pre className="text-sm text-cyan-300 overflow-auto">
{`const useStore =
 create((set) => ({
   user: null,

   setUser: (user) =>
    set({ user })
 }));

const user =
 useStore(
  state => state.user
 );`}
          </pre>
        </div>

        <ul className="mt-4 text-slate-300 space-y-2">
          <li>✅ Minimal Boilerplate</li>
          <li>✅ Fast Performance</li>
          <li>✅ Easy Learning Curve</li>
        </ul>
      </div>

      {/* TanStack Query */}

      <div className="mt-10">
        <h2 className="text-cyan-400 font-semibold text-lg">
          Server State (TanStack Query)
        </h2>

        <p className="text-slate-300 mt-2">
          Manage API data separately from UI state.
        </p>

        <div className="mt-4 bg-slate-800 rounded-xl p-4">
          <pre className="text-sm text-cyan-300 overflow-auto">
{`const { data } =
 useQuery({
   queryKey: ['users'],
   queryFn: fetchUsers
 });`}
          </pre>
        </div>

        <ul className="mt-4 text-slate-300 space-y-2">
          <li>✅ API Caching</li>
          <li>✅ Background Refetching</li>
          <li>✅ Request Deduplication</li>
        </ul>
      </div>

      {/* Global Architecture */}

      <div className="mt-10 bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4">
        <h3 className="text-cyan-400 font-semibold">
          Recommended Enterprise Architecture
        </h3>

        <div className="mt-4 bg-slate-900 rounded-xl p-4">
          <pre className="text-cyan-300 overflow-auto">
{`UI State
(useState / useReducer)

        ↓

Global State
(Redux / Zustand)

        ↓

Server State
(TanStack Query)

        ↓

Backend APIs`}
          </pre>
        </div>

        <ul className="mt-4 text-slate-300 space-y-2">
          <li>✅ Separation Of Concerns</li>
          <li>✅ Scalable Architecture</li>
          <li>✅ Better Performance</li>
          <li>✅ Enterprise Ready</li>
        </ul>
      </div>

    </section>
  );
};

export default ReactAdvancedStateManagement;