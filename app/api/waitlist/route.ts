import { NextResponse } from "next/server";
import { Resend } from "resend";

const WAITLIST_INBOX = "waitlist@mhtcetsimu.in";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[0-9+\-\s()]{7,20}$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body.email !== "string" || !EMAIL_RE.test(body.email.trim())) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  if (typeof body.phone !== "string" || !PHONE_RE.test(body.phone.trim())) {
    return NextResponse.json({ error: "Enter a valid phone number." }, { status: 400 });
  }

  const email = body.email.trim();
  const phone = body.phone.trim();
  const role = typeof body.role === "string" && body.role.trim() ? body.role.trim() : "Not specified";

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set — waitlist form cannot send email.");
    return NextResponse.json(
      { error: "Waitlist isn't configured yet. Please email waitlist@mhtcetsimu.in directly." },
      { status: 500 },
    );
  }

  try {
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "MHTCET Simu Waitlist <waitlist@mhtcetsimu.in>",
      to: WAITLIST_INBOX,
      replyTo: email,
      subject: `[Beta Signup] ${email}`,
      text: `Email: ${email}\nPhone: ${phone}\nI am a: ${role}`,
    });

    await resend.emails.send({
      from: "MHTCET Simu <waitlist@mhtcetsimu.in>",
      to: email,
      subject: "Thanks for joining the MHTCET Simu beta",
      text: `Thank you for signing up!\n\nYou're now one of our privileged early testers. We'll send you your beta access link as soon as it's ready, giving you full access to MHTCET Simu, 16,000+ past year questions, a real exam interface, and chapter-level analytics, for a limited period, completely free. Your feedback during the beta will directly shape the product before we open up to everyone.\n\nIn the meantime, check out our study guides for MHT CET prep tips: https://mhtcetsimu.in/study-guides\n\nTalk soon,\nThe MHTCET Simu team`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send waitlist email:", error);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
