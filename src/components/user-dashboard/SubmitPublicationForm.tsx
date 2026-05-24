import { CheckCircle2, FileText, Send, Upload } from "lucide-react";
import { articleTypes, subjectAreas, userProfile } from "./userDashboardData";

const fieldClass =
  "h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20";
const textAreaClass =
  "w-full resize-none rounded-xl border border-slate-200 bg-white p-4 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20";

const SubmitPublicationForm = () => {
  const declarations = [
    "This is original work",
    "This manuscript is not submitted elsewhere",
    "All authors approved this submission",
    "Conflict of interest statement is included",
    "Funding statement is included",
    "Ethics approval is included if required",
  ];

  return (
    <section>
      <div className="mb-6">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">Submit Publication</span>
        <h1 className="mt-2 text-3xl font-extrabold text-slate-950">Publication Submission</h1>
        <p className="mt-1 text-sm text-slate-500">Complete article details, authors, files, declarations and reviewer suggestions.</p>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1fr_0.36fr]">
        <div className="space-y-5">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <FileText size={18} className="text-primary" />
              <h2 className="font-extrabold text-slate-950">Article Info</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-bold text-slate-700">Article title</label>
                <input className={fieldClass} placeholder="Enter article title" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">Article type</label>
                <select className={fieldClass} defaultValue="">
                  <option value="" disabled>Select article type</option>
                  {articleTypes.map((type) => <option key={type}>{type}</option>)}
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">Subject area</label>
                <select className={fieldClass} defaultValue="">
                  <option value="" disabled>Select subject area</option>
                  {subjectAreas.map((area) => <option key={area}>{area}</option>)}
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-bold text-slate-700">Abstract</label>
                <textarea rows={5} className={textAreaClass} placeholder="Paste the article abstract" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">Keywords</label>
                <input className={fieldClass} placeholder="Keyword one, keyword two" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">Short editor summary</label>
                <input className={fieldClass} placeholder="One-line editorial summary" />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="font-extrabold text-slate-950">Author Details</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">Corresponding author</label>
                <input className={fieldClass} defaultValue={userProfile.name} />
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">Email</label>
                <input type="email" className={fieldClass} defaultValue={userProfile.email} />
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">Institution / Affiliation</label>
                <input className={fieldClass} defaultValue={userProfile.institution} />
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">Co-authors</label>
                <input className={fieldClass} placeholder="Name and email, separated by commas" />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <Upload size={18} className="text-primary" />
              <h2 className="font-extrabold text-slate-950">Upload Files</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {["Main manuscript PDF / DOC / DOCX", "Cover letter", "Figures and tables", "Supplementary files"].map((label) => (
                <label key={label} className="flex min-h-[116px] cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4 text-center transition-colors hover:border-primary hover:bg-primary/5">
                  <Upload size={22} className="text-primary" />
                  <span className="mt-2 text-sm font-bold text-slate-700">{label}</span>
                  <span className="mt-1 text-xs text-slate-400">Choose file</span>
                  <input type="file" className="hidden" />
                </label>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="font-extrabold text-slate-950">Declarations</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {declarations.map((label) => (
                <label key={label} className="flex min-h-12 items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 text-sm font-bold text-slate-700">
                  <input type="checkbox" className="h-4 w-4 accent-primary" />
                  {label}
                </label>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="font-extrabold text-slate-950">Reviewer Suggestions</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">Reviewer name</label>
                <input className={fieldClass} placeholder="Suggested reviewer" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">Reviewer email</label>
                <input type="email" className={fieldClass} placeholder="reviewer@example.edu" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">Institution</label>
                <input className={fieldClass} placeholder="Reviewer institution" />
              </div>
            </div>
          </div>
        </div>

        <aside className="space-y-5">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="font-extrabold text-slate-950">Submission Steps</h2>
            <div className="mt-4 space-y-3">
              {["Article info", "Author details", "Upload files", "Declarations", "Reviewer suggestions", "Final submit"].map((step, index) => (
                <div key={step} className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm font-extrabold text-primary">
                    {index + 1}
                  </div>
                  <p className="text-sm font-bold text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5 shadow-sm">
            <CheckCircle2 size={22} className="text-emerald-700" />
            <h2 className="mt-3 font-extrabold text-emerald-950">Ready for Preview</h2>
            <p className="mt-2 text-sm leading-relaxed text-emerald-800">
              Final confirmation prepares the publication for editorial check.
            </p>
            <button
              type="button"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-primary/90"
            >
              <Send size={17} /> Submit Publication
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default SubmitPublicationForm;
