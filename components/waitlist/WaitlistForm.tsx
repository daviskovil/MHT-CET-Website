"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const ROLES = ["Student", "Parent", "Coaching Institute"];

const INPUT_CLASSES =
  "w-full rounded-full border border-ink/12 bg-white px-5 py-3 text-sm text-ink placeholder:text-muted/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

const LABEL_CLASSES = "mb-1.5 block text-left font-display text-xs font-bold uppercase tracking-wide text-muted";

export default function WaitlistForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error(body?.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-teal-dark/25 bg-lavender p-6 text-center">
        <p className="font-display text-xs font-bold uppercase tracking-wide text-teal-dark">
          You&#39;re in
        </p>
        <p className="mt-2 text-sm text-muted">
          Check your inbox for a confirmation. We&#39;ll send your beta access link as soon as it&#39;s ready.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="waitlist-email" className={LABEL_CLASSES}>
            Email
          </label>
          <input
            id="waitlist-email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className={INPUT_CLASSES}
          />
        </div>
        <div>
          <label htmlFor="waitlist-phone" className={LABEL_CLASSES}>
            Phone Number
          </label>
          <input
            id="waitlist-phone"
            name="phone"
            type="tel"
            required
            placeholder="98765 43210"
            className={INPUT_CLASSES}
          />
        </div>
      </div>

      <fieldset className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted sm:justify-start">
        <legend className="sr-only">I am a</legend>
        {ROLES.map((option, index) => (
          <label key={option} className="flex items-center gap-2">
            <input
              type="radio"
              name="role"
              value={option}
              defaultChecked={index === 0}
              className="h-4 w-4 accent-primary"
            />
            {option}
          </label>
        ))}
      </fieldset>

      {status === "error" && <p className="text-center text-sm text-red-600 sm:text-left">{errorMessage}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-ink px-6 py-3 font-display text-sm font-bold text-white transition-colors hover:bg-ink/90 disabled:opacity-60"
      >
        {status === "submitting" ? "Joining…" : "Join the Beta"}
      </button>
    </form>
  );
}
