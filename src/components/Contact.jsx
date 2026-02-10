export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Get In Touch
        </h2>

        <p className="text-slate-400 mb-10">
          I’m open to part-time, freelance, and remote opportunities.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
            <div className="px-6 py-3 rounded-lg bg-indigo-600 text-white">
              <p className="text-sm">Email me at</p>
            <a
            href="mailto:abrarahmedsiddiqui67@gmail.com"
             className="underline"
           >
            abrarahmedsiddiqui67@gmail.com
            </a>
            </div>


          <a
            href="https://github.com/abrarahmedsiddiqui67"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-slate-600 hover:bg-slate-800 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-slate-600 hover:bg-slate-800 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
