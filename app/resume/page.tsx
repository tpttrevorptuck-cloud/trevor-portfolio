export default function Resume() {
    const resumeUrl = "/Trevor_Tuck_2026_Storytelling_resume.pdf";
  
    return (
      <main className="min-h-screen bg-white text-slate-900">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="text-4xl font-semibold">Resume</h1>
              <p className="mt-3 max-w-2xl text-slate-700">
                Role-tailored resume for storytelling + social media communications.
              </p>
            </div>
  
            <div className="flex gap-3">
              <a
                href={resumeUrl}
                download
                className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-slate-800"
              >
                Download PDF
              </a>
              <a
                href="/"
                className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50"
              >
                Back home
              </a>
            </div>
          </div>
  
          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <iframe
              src={resumeUrl}
              title="Trevor Tuck Resume"
              className="h-[80vh] w-full"
            />
          </div>
  
          <p className="mt-4 text-sm text-slate-500">
            If the preview doesn’t load in your browser, use the Download button above.
          </p>
        </div>
      </main>
    );
  }
  