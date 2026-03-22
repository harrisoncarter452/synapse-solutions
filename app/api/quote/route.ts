import { Resend } from "resend";
import { NextResponse } from "next/server";
import { quoteNotificationEmail, quoteConfirmationEmail } from "@/lib/email-templates";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, email, company, service, budget, message } = await req.json();

  if (!name || !email || !service || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // Send both emails in parallel
  await Promise.all([
    // 1. Internal notification to Synapse
    resend.emails.send({
      from: "Synapse Solutions <noreply@synapse-ai-solutions.com>",
      to: "info@synapse-ai-solutions.com",
      replyTo: email,
      subject: `New Quote Request — ${service}`,
      html: quoteNotificationEmail({ name, email, company, service, budget, message }),
    }),

    // 2. Auto-reply confirmation to the submitter
    resend.emails.send({
      from: "Synapse Solutions <noreply@synapse-ai-solutions.com>",
      to: email,
      subject: "We've received your quote request — Synapse Solutions",
      html: quoteConfirmationEmail({ name, service }),
    }),
  ]);

  return NextResponse.json({ ok: true });
}
