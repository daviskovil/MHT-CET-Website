import { NextResponse } from "next/server";
import { Resend } from "resend";

const WAITLIST_INBOX = "waitlist@mhtcetsimu.in";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body.email !== "string" || !EMAIL_RE.test(body.email.trim())) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  const email = body.email.trim();
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
      subject: `[Waitlist] New signup: ${email}`,
      text: `Email: ${email}\nI am a: ${role}`,
    });

    await resend.emails.send({
      from: "MHTCET Simu <waitlist@mhtcetsimu.in>",
      to: email,
      subject: "You're on the MHTCET Simu waitlist",
      text: `Thanks for signing up.\n\nWe're putting the finishing touches on MHTCET Simu, the exam simulator with 16,000+ past year questions, a real exam interface, and chapter-level analytics. You're now on the list, and we'll email you the moment early access opens, along with your free tier.\n\nIn the meantime, check out our study guides for MHT CET prep tips: https://mhtcetsimu.in/study-guides\n\nSee you soon,\nThe MHTCET Simu team`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send waitlist email:", error);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
