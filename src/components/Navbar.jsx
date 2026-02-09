export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-900/70 backdrop-blur z-50">
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between px-6">
        <h1 className="font-semibold text-lg">Abrar</h1>
        <div className="space-x-6 text-sm">
          <a href="#projects" className="hover:text-indigo-400">Projects</a>
          <a href="#contact" className="hover:text-indigo-400">Contact</a>
        </div>
      </div>
    </nav>
  )
}
