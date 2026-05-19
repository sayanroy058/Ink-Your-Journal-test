import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  BookOpen,
  CheckCircle2,
  Eye,
  FileText,
  LockKeyhole,
  Mail,
  PenLine,
  ShieldCheck,
  UserRound,
  Users,
} from "lucide-react";

const Login = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="relative overflow-hidden bg-slate-50">
        <section className="relative bg-gradient-to-br from-[hsl(220,55%,10%)] via-[hsl(220,48%,13%)] to-[hsl(168,55%,14%)] px-4 pb-20 pt-32">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
          <div className="container relative z-10 mx-auto max-w-6xl">
            <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/20 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white">
                  <LockKeyhole size={13} /> Secure Access
                </span>
                <h1 className="mb-5 text-4xl font-extrabold leading-tight text-white md:text-6xl">
                  Login to{" "}
                  <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                    Ink Your Journal
                  </span>
                </h1>
                <p className="max-w-xl text-lg leading-relaxed text-white/70">
                  Role-based access for authors, readers, reviewers, editors and administrators.
                </p>
                <div className="mt-8 grid max-w-lg grid-cols-2 gap-3">
                  {["Editorial workflow", "Reviewer access", "Publishing tools", "User dashboard"].map((item) => (
                    <div key={item} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.07] px-3 py-3 text-sm font-semibold text-white/80">
                      <CheckCircle2 size={15} className="text-emerald-300" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.08 }}
                className="rounded-2xl border border-white/15 bg-white p-5 shadow-2xl shadow-slate-950/25 md:p-7"
              >
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">Account Access</span>
                  <h2 className="mt-2 text-2xl font-extrabold text-slate-900">Sign In to Your Account</h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Enter your credentials. Your account type will be detected automatically.
                  </p>
                </div>

                <div className="mb-7 rounded-2xl border border-primary/15 bg-primary/5 p-4">
                  <div className="flex gap-3">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Automatic role detection</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-500">
                        Editor, user, reviewer and admin access will be checked from the database when authentication is added.
                      </p>
                    </div>
                  </div>
                </div>

                <form className="space-y-4">
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-slate-700">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={17} />
                      <input
                        type="email"
                        placeholder="name@institution.edu"
                        className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/25"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-slate-700">Password</label>
                    <div className="relative">
                      <LockKeyhole className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={17} />
                      <input
                        type="password"
                        placeholder="Enter your password"
                        className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-11 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/25"
                      />
                      <Eye className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={17} />
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-4 text-sm">
                    <label className="flex items-center gap-2 font-medium text-slate-600">
                      <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary" />
                      Remember me
                    </label>
                    <button type="button" className="font-bold text-primary hover:text-primary/80">
                      Forgot password?
                    </button>
                  </div>
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-sm font-bold text-white transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 active:scale-[0.99]"
                  >
                    <UserRound size={17} /> Login
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="px-4 py-14">
          <div className="container mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
            {[
              { icon: FileText, title: "Submit", text: "Authors can prepare and track manuscripts." },
              { icon: Users, title: "Collaborate", text: "Editors and reviewers can coordinate decisions." },
              { icon: ShieldCheck, title: "Protected", text: "Each role keeps access focused and organized." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon size={21} />
                </div>
                <h3 className="font-bold text-slate-900">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-500">{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
