import { Link } from 'react-router-dom';
const MainPageNavBar = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-lg border-b border-slate-800 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="text-2xl font-bold text-cyan-400">
            <Link to="/">
              Kishor Jadhav
            </Link>
          </h1>

          <div className="hidden md:flex gap-8 text-slate-300">
            <Link to="/resume" className="hover:text-cyan-400">
              My Resume
            </Link>

            <Link to="/tech-stack" className="hover:text-cyan-400">
              Tech Stack
            </Link>

            <Link to="/projects" className="hover:text-cyan-400">
              Projects
            </Link>

            <Link to="/contact" className="hover:text-cyan-400">
              Contact
            </Link>
          </div>

        </div>
      </nav>
    </>
  )
}
export default MainPageNavBar;