export default function Contact() {
    return (
      <main className="min-h-screen bg-white text-slate-900">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h1 className="text-4xl font-semibold">Contact</h1>
          <p className="mt-4 max-w-2xl text-slate-700">
            The fastest way to reach me is email. I’m also active on LinkedIn.
          </p>
  
          <div className="mt-8 space-y-3 text-slate-700">
            <p>
              <span className="font-medium text-slate-900">Email:</span>{" "}
              <span className="text-slate-600">tpt.trevorptuck@gmail.com</span>
            </p>
            <p>
              <span className="font-medium text-slate-900">LinkedIn:</span>{" "}
              <span className="text-slate-600">https://www.linkedin.com/in/trevortuck/</span>
            </p>
          </div>
  
          <a
            href="/"
            className="mt-10 inline-block rounded-2xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50"
          >
            Back home
          </a>
        </div>
      </main>
    );
  }
  