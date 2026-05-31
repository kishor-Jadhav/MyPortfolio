import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

import kkImage from "../../assets/kk.jpg"
import kkResume from "../../assets/Kishor Jadhav.pdf"
const HomPageHero = () => {
  return (
    <>
      <section id="home-page-hero" className="min-h-screen flex items-center justify-center px-6 mt-20">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>

            <p className="text-cyan-400 text-lg mb-4">
              Hello, I'm
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Kishor <br />

              <span className="text-cyan-400">
                Jadhav
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl mt-6 text-slate-300">
              UI Developer & Tech Lead
            </h2>
            <div className="mt-12 bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white">
                Professional Snapshot
              </h3>

              <p className="text-slate-300 mt-4 leading-7">
                Senior UI Developer & Tech Lead with 10+ years of experience
                delivering enterprise-scale web applications using Angular,
                React, TypeScript, Spring Boot, and SQL technologies. Proven
                expertise in application modernization, performance optimization,
                responsive design, and leading cross-functional development
                teams.
              </p>
            </div>

            <div className="flex gap-4 mt-8">

              <button className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold">
                Hire Me
              </button>

              <button className="border border-cyan-500 text-cyan-400 px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-cyan-500 hover:text-black transition">
                <FaDownload />
                <a href={kkResume} download className="text-lg font-semibold">
                  Resume
                </a>
              </button>

            </div>

            <div className="flex gap-6 mt-8 text-2xl text-slate-400">
              <FaGithub className="hover:text-cyan-400 cursor-pointer" />

              <FaLinkedin className="hover:text-cyan-400 cursor-pointer" />
            </div>

          </div>

          {/* RIGHT */}
          <div className="flex justify-center">

            <div className="w-[350px] h-[350px] rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 p-1 shadow-2xl">

              <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center text-7xl font-bold">
                <img
                  src={kkImage}
                  alt="Kishor Jadhav"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

            </div>

          </div>

        </div>
      </section>



    </>
  );
}

export default HomPageHero;