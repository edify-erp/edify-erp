
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <nav className="flex items-center justify-between border-b bg-white px-6 py-5 md:px-12">
        <Link href="/" className="flex items-center">
  <img
    src="/edify-logo.png"
    alt="Edify - Smart Education. Better Tomorrow."
    className="h-14 w-auto object-contain"
  />
</Link>

        <div className="hidden gap-8 text-sm font-medium md:flex">
          <a href="#features" className="hover:text-blue-700">Features</a>
          <a href="#about" className="hover:text-blue-700">About</a>
          <a href="#contact" className="hover:text-blue-700">Contact</a>
        </div>

        <a
          href="#contact"
          className="rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800"
        >
          Request a Demo
        </a>
      </nav>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:px-12 md:py-28">
        <div>
          <p className="mb-5 inline-block rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700">
            SMARTER EDUCATION STARTS HERE
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            One platform.
            <span className="block text-blue-700">Every institution.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Simplify school and college management with one connected platform
            for administration, teachers, students, and parents.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#features"
              className="rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800"
            >
              Explore Features
            </a>
            <a
              href="#about"
              className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold hover:bg-slate-100"
            >
              Learn More
            </a>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            Designed for modern educational institutions.
          </p>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-blue-800 to-teal-600 p-8 text-white shadow-xl md:p-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-100">
            Welcome to Edify ERP
          </p>
          <h2 className="mt-4 text-3xl font-bold">
            Everything connected. Everything organized.
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              ["01", "Student Records"],
              ["02", "Attendance"],
              ["03", "Fee Management"],
              ["04", "Examinations"],
            ].map(([number, label]) => (
              <div
                key={number}
                className="rounded-xl border border-white/20 bg-white/10 p-4"
              >
                <p className="text-sm text-teal-200">{number}</p>
                <p className="mt-2 font-semibold">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="bg-white px-6 py-20 md:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold text-teal-600">OUR FEATURES</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Manage your institution with confidence
          </h2>
          <p className="mt-4 max-w-2xl text-slate-600">
            Bring everyday academic and administrative activities into one
            organized workspace.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Student Management", "Organize student profiles, classes, and academic records."],
              ["Attendance Tracking", "Record attendance and monitor attendance percentages."],
              ["Fee Management", "Manage fee structures, payments, and receipts."],
              ["Timetable & Classes", "Organize class schedules, subjects, and teachers."],
              ["Exams & Results", "Manage examinations, marks, and academic performance."],
              ["Parent Communication", "Give parents a convenient way to follow student progress."],
            ].map(([title, description]) => (
              <article key={title} className="rounded-2xl border border-slate-200 p-6 hover:shadow-md">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-16 text-center md:px-12">
        <h2 className="text-3xl font-bold">Education management, simplified.</h2>
        <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
          Edify ERP is being built to help schools and colleges manage their
          daily operations through a single, easy-to-use website.
        </p>
      </section>

      <footer id="contact" className="bg-slate-950 px-6 py-10 text-center text-white">
        <p className="text-xl font-bold">
          Edify<span className="text-teal-400"> ERP</span>
        </p>
        <p className="mt-3 text-sm text-slate-400">
          Smart Education. Better Tomorrow.
        </p>
        <p className="mt-6 text-xs text-slate-500">
          © 2026 Edify ERP. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
