
"use client";

import { useState } from "react";

type AccountType = "parent" | "student" | "teacher" | "admin";

export default function LoginPage() {
  const [institution, setInstitution] = useState("");
  const [accountType, setAccountType] = useState<AccountType>("parent");
  const [identifier, setIdentifier] = useState("");
  const [dob, setDob] = useState("");
  const [message, setMessage] = useState("");

  const identifierLabel = {
    parent: "Parent / Guardian Phone Number",
    student: "Student Full Name",
    teacher: "Employee ID",
    admin: "Employee ID",
  }[accountType];

  const identifierPlaceholder = {
    parent: "Enter registered phone number",
    student: "Enter your full name",
    teacher: "Enter your employee ID",
    admin: "Enter your employee ID",
  }[accountType];

  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!institution) {
      setMessage("Please select your school or college.");
      return;
    }

    setMessage(
      "Login screen is ready. Authentication must be connected before accounts can sign in."
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10">
      <div className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-xl sm:p-9">
        <a href="/" className="block">
          <img
            src="/edify-logo.png"
            alt="Edify - Smart Education. Better Tomorrow."
            className="mx-auto mb-5 h-20 w-auto object-contain"
          />
        </a>

        <h1 className="text-center text-2xl font-bold text-[#073B68]">
          Welcome to Edify ERP
        </h1>
        <p className="mt-2 text-center text-sm text-slate-500">
          Select your institution to continue
        </p>

        <form onSubmit={handleLogin} className="mt-8 space-y-5">
          <div>
            <label
              htmlFor="institution"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              1. Select School / College
            </label>
            <select
              id="institution"
              value={institution}
              onChange={(event) => setInstitution(event.target.value)}
              required
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none focus:border-[#073B68] focus:ring-2 focus:ring-[#073B68]/20"
            >
              <option value="">Choose your institution</option>
              <option value="demo-school">Demo School</option>
              <option value="demo-college">Demo College</option>
            </select>
            <p className="mt-1 text-xs text-slate-500">
              Demo institutions only; the real list will come from the database.
            </p>
          </div>

          <div>
            <label
              htmlFor="accountType"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              2. Select Account Type
            </label>
            <select
              id="accountType"
              value={accountType}
              onChange={(event) => {
                setAccountType(event.target.value as AccountType);
                setIdentifier("");
                setDob("");
                setMessage("");
              }}
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-[#073B68] focus:ring-2 focus:ring-[#073B68]/20"
            >
              <option value="parent">School Parent / Guardian</option>
              <option value="student">College Student</option>
              <option value="teacher">Teacher / Faculty</option>
              <option value="admin">Institution Administrator</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="identifier"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              {identifierLabel}
            </label>
            <input
              id="identifier"
              type={accountType === "parent" ? "tel" : "text"}
              autoComplete="username"
              value={identifier}
              onChange={(event) => setIdentifier(event.target.value)}
              placeholder={identifierPlaceholder}
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-[#073B68] focus:ring-2 focus:ring-[#073B68]/20"
            />
          </div>

          <div>
            <label
              htmlFor="dob"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              {accountType === "parent"
                ? "Your Date of Birth (temporary password)"
                : accountType === "student"
                  ? "Student Date of Birth (temporary password)"
                  : "Your Date of Birth (temporary password)"}
            </label>
            <input
              id="dob"
              type="password"
              inputMode="numeric"
              autoComplete="current-password"
              value={dob}
              onChange={(event) => setDob(event.target.value)}
              placeholder="Enter DOB as DDMMYYYY"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-[#073B68] focus:ring-2 focus:ring-[#073B68]/20"
            />
            <p className="mt-1 text-xs text-slate-500">
              Example format: 25082008 (25 August 2008). Use your registered DOB.
            </p>
          </div>

          {message && (
            <p
              role="status"
              className="rounded-lg bg-blue-50 p-3 text-sm text-[#073B68]"
            >
              {message}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-lg bg-[#073B68] px-4 py-3 font-semibold text-white transition hover:bg-[#052D50]"
          >
            Continue to Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-xs leading-5 text-slate-500">
          Authorized access for your educational institution.
        </p>

        <a
          href="/"
          className="mt-5 block text-center text-sm font-medium text-[#079F91] hover:underline"
        >
          Back to homepage
        </a>
      </div>
    </main>
  );
}
