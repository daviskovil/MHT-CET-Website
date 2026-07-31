"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const INPUT_CLASSES =
  "w-full rounded-xl border border-ink/12 bg-white px-4 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

const LABEL_CLASSES = "mb-1.5 block font-display text-xs font-bold uppercase tracking-wide text-muted";

export default function ContactForm({ initialSubject = "" }: { initialSubject?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
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
      <div className="rounded-2xl border border-primary/25 bg-cream p-6 text-sm">
        <p className="font-display text-xs font-bold uppercase tracking-wide text-primary-dark">
          Message sent
        </p>
        <p className="mt-2 text-muted">
          Thanks for reaching out — we respond within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className={LABEL_CLASSES}>
          Name
        </label>
        <input id="name" name="name" type="text" required className={INPUT_CLASSES} />
      </div>

      <div>
        <label htmlFor="email" className={LABEL_CLASSES}>
          Email
        </label>
        <input id="email" name="email" type="email" required className={INPUT_CLASSES} />
      </div>

      <fieldset>
        <legend className={LABEL_CLASSES}>I am a</legend>
        <div className="flex flex-wrap gap-4 text-sm text-ink">
          {["Student", "Parent", "Coaching Institute"].map((option, index) => (
            <label key={option} className="flex items-center gap-2">
              <input
                type="radio"
                name="type"
                value={option}
                defaultChecked={index === 0}
                className="h-4 w-4 accent-primary"
              />
              {option}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="subject" className={LABEL_CLASSES}>
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          defaultValue={initialSubject}
          className={INPUT_CLASSES}
        />
      </div>

      <div>
        <label htmlFor="message" className={LABEL_CLASSES}>
          Message
        </label>
        <textarea id="message" name="message" required rows={4} className={INPUT_CLASSES} />
      </div>

      {status === "error" && <p className="text-sm text-red-600">{errorMessage}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-ink px-5 py-3 font-display text-sm font-bold text-white transition-colors hover:bg-ink/90 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
