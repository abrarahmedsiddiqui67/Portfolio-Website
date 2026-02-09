export default function Projects() {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-2xl font-semibold mb-8">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-slate-900 p-6 rounded-lg">
          <h3 className="font-medium">Portfolio Website</h3>
          <p className="text-sm text-slate-400 mt-2">
            Personal portfolio built with React and Tailwind CSS.
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-lg">
          <h3 className="font-medium">SaaS Dashboard UI</h3>
          <p className="text-sm text-slate-400 mt-2">
            Admin dashboard interface inspired by real SaaS products.
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-lg">
          <h3 className="font-medium">Landing Page</h3>
          <p className="text-sm text-slate-400 mt-2">
            Responsive startup landing page design.
          </p>
        </div>
      </div>
    </section>
  )
}
