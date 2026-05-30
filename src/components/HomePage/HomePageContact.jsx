const HomePageContact = () => {
  return (
    <section id="home-page-contact" className="py-16 px-6 bg-slate-950/90">
        <div className="max-w-7xl mx-auto">
          <p className="text-cyan-400 text-2xl uppercase tracking-[0.35em]">Contact</p>
          <h3 className="text-xl md:text-xl font-bold mt-2">Get in touch</h3>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
              <p className="text-slate-400 uppercase text-xs tracking-[0.35em]">Phone</p>
              <p className="mt-3 text-lg font-semibold">+91 93224 55007</p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
              <p className="text-slate-400 uppercase text-xs tracking-[0.35em]">Email</p>
              <p className="mt-3 text-lg font-semibold">kishor01jadhav@gmail.com</p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
              <p className="text-slate-400 uppercase text-xs tracking-[0.35em]">Location</p>
              <p className="mt-3 text-lg font-semibold">Pune, Maharashtra</p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
              <p className="text-slate-400 uppercase text-xs tracking-[0.35em]">LinkedIn</p>
              <a href="#" className="mt-3 inline-block text-lg font-semibold text-cyan-400 hover:text-cyan-300">
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </section>
  )
}
export default HomePageContact;