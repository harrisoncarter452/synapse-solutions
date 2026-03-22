import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, company, service, budget, message } = await req.json();

  if (!name || !email || !service || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  await resend.emails.send({
    from: "Synapse Solutions <noreply@synapse-ai-solutions.com>",
    to: "info@synapse-ai-solutions.com",
    replyTo: email,
    subject: `New Quote Request — ${service}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #111;">
        <h2 style="margin-bottom: 4px;">New Quote Request</h2>
        <p style="color: #666; margin-bottom: 24px;">Submitted via synapse-ai-solutions.com</p>

        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; width: 140px; color: #888; font-size: 13px;">Name</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #888; font-size: 13px;">Email</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #888; font-size: 13px;">Company</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${company || "—"}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #888; font-size: 13px;">Service</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${service}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #888; font-size: 13px;">Budget</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${budget || "Not specified"}</td>
          </tr>
        </table>

        <h3 style="margin: 24px 0 8px;">Message</h3>
        <p style="background: #f9f9f9; padding: 16px; border-radius: 8px; line-height: 1.6; white-space: pre-wrap;">${message}</p>

        <p style="margin-top: 32px; color: #999; font-size: 12px;">
          Reply directly to this email to respond to ${name}.
        </p>
      </div>
    `,
  });

  return NextResponse.json({ ok: true });
}
