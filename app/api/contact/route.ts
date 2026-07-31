import { NextResponse } from "next/server";
import { Resend } from "resend";

const CONTACT_INBOX = "hello@mhtcetsimu.in";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (
    !body ||
    typeof body.name !== "string" ||
    typeof body.email !== "string" ||
    typeof body.message !== "string" ||
    !body.name.trim() ||
    !body.email.trim() ||
    !body.message.trim()
  ) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const { name, email, type, subject, message } = body as {
    name: string;
    email: string;
    type?: string;
    subject?: string;
    message: string;
  };

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set — contact form cannot send email.");
    return NextResponse.json(
      { error: "Contact form is not configured yet. Please email hello@mhtcetsimu.in directly." },
      { status: 500 },
    );
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: "MHTCET Simu Contact Form <contact@mhtcetsimu.in>",
      to: CONTACT_INBOX,
      replyTo: email,
      subject: subject?.trim() ? `[Contact] ${subject}` : `[Contact] New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nI am a: ${type ?? "Not specified"}\nSubject: ${subject ?? "N/A"}\n\n${message}`,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send contact form email:", error);
    return NextResponse.json({ error: "Something went wrong sending your message." }, { status: 500 });
  }
}
