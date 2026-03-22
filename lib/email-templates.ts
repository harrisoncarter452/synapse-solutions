// ─── Shared email footer ──────────────────────────────────────────────────────
// Pure inline styles + table layout — works in Gmail, Outlook, Apple Mail, etc.

const FOOTER_HTML = `
<table width="100%" cellpadding="0" cellspacing="0" style="margin-top:40px;">
  <tr>
    <td>
      <!-- Gradient bar -->
      <div style="height:3px;background:linear-gradient(90deg,#8B5CF6 0%,#EC4899 50%,#F59E0B 100%);border-radius:2px;margin-bottom:28px;"></div>

      <!-- Logo row -->
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
        <tr>
          <td>
            <img
              src="https://synapse-ai-solutions.com/email-logo.png"
              alt="Synapse Solutions"
              width="64"
              height="64"
              style="display:block;object-fit:contain;"
            />
          </td>
        </tr>
      </table>

      <!-- Tagline -->
      <p style="font-size:13px;color:#888888;line-height:1.6;margin:0 0 20px;">
        Human-centred AI for real business — empowering your team,<br/>
        supercharging your operations, and connecting every part of your business.
      </p>

      <!-- Contact info -->
      <table cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
        <tr>
          <td style="padding:3px 0;">
            <a href="https://synapse-ai-solutions.com" style="font-size:13px;color:#8B5CF6;text-decoration:none;">
              synapse-ai-solutions.com
            </a>
          </td>
        </tr>
        <tr>
          <td style="padding:3px 0;">
            <a href="mailto:info@synapse-ai-solutions.com" style="font-size:13px;color:#8B5CF6;text-decoration:none;">
              info@synapse-ai-solutions.com
            </a>
          </td>
        </tr>
      </table>

      <!-- Divider -->
      <div style="height:1px;background:#2a2a2a;margin-bottom:16px;"></div>

      <!-- Bottom row: copyright + services -->
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td>
            <p style="font-size:11px;color:#555555;margin:0 0 6px;">
              &copy; ${new Date().getFullYear()} Synapse Solutions. All rights reserved.
            </p>
            <p style="font-size:11px;color:#444444;margin:0;">
              AI Chatbots &nbsp;&middot;&nbsp; Lead Generation &nbsp;&middot;&nbsp; AI Agents &nbsp;&middot;&nbsp; Web &amp; App Design &nbsp;&middot;&nbsp; Branding
            </p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
`;

// ─── Email wrapper ────────────────────────────────────────────────────────────
// Wraps any body content in a consistent dark-themed email shell

function wrapEmail(bodyHtml: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
  <title>Synapse Solutions</title>
</head>
<body style="margin:0;padding:0;background-color:#0f0f0f;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0f0f0f;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#111111;border-radius:16px;border:1px solid #1f1f1f;overflow:hidden;">
          <!-- Top accent bar -->
          <tr>
            <td>
              <div style="height:4px;background:linear-gradient(90deg,#8B5CF6 0%,#EC4899 50%,#F59E0B 100%);"></div>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:40px 40px 32px;color:#ffffff;">
              ${bodyHtml}
              ${FOOTER_HTML}
            </td>
          </tr>
        </table>

        <!-- Legal fine print below card -->
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;margin-top:16px;">
          <tr>
            <td style="text-align:center;padding:0 20px;">
              <p style="font-size:11px;color:#444444;margin:0;">
                You're receiving this because you contacted Synapse Solutions via our website.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

// ─── Template: Internal quote notification (sent to Synapse) ──────────────────

export function quoteNotificationEmail(data: {
  name: string;
  email: string;
  company?: string;
  service: string;
  budget?: string;
  message: string;
}): string {
  const { name, email, company, service, budget, message } = data;

  const body = `
    <!-- Header -->
    <h2 style="font-size:22px;font-weight:700;color:#ffffff;margin:0 0 4px;letter-spacing:-0.02em;">
      New Quote Request
    </h2>
    <p style="font-size:13px;color:#666666;margin:0 0 28px;">
      Submitted via synapse-ai-solutions.com
    </p>

    <!-- Details table -->
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #1f1f1f;width:130px;font-size:12px;color:#666666;font-weight:500;text-transform:uppercase;letter-spacing:0.06em;">Name</td>
        <td style="padding:10px 0;border-bottom:1px solid #1f1f1f;font-size:14px;color:#ffffff;font-weight:600;">${name}</td>
      </tr>
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #1f1f1f;font-size:12px;color:#666666;font-weight:500;text-transform:uppercase;letter-spacing:0.06em;">Email</td>
        <td style="padding:10px 0;border-bottom:1px solid #1f1f1f;">
          <a href="mailto:${email}" style="font-size:14px;color:#8B5CF6;text-decoration:none;">${email}</a>
        </td>
      </tr>
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #1f1f1f;font-size:12px;color:#666666;font-weight:500;text-transform:uppercase;letter-spacing:0.06em;">Company</td>
        <td style="padding:10px 0;border-bottom:1px solid #1f1f1f;font-size:14px;color:#ffffff;">${company || "—"}</td>
      </tr>
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #1f1f1f;font-size:12px;color:#666666;font-weight:500;text-transform:uppercase;letter-spacing:0.06em;">Service</td>
        <td style="padding:10px 0;border-bottom:1px solid #1f1f1f;">
          <span style="font-size:13px;color:#8B5CF6;background:rgba(139,92,246,0.12);border:1px solid rgba(139,92,246,0.25);border-radius:100px;padding:3px 10px;font-weight:600;">${service}</span>
        </td>
      </tr>
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #1f1f1f;font-size:12px;color:#666666;font-weight:500;text-transform:uppercase;letter-spacing:0.06em;">Budget</td>
        <td style="padding:10px 0;border-bottom:1px solid #1f1f1f;font-size:14px;color:#ffffff;">${budget || "Not specified"}</td>
      </tr>
    </table>

    <!-- Message -->
    <p style="font-size:12px;color:#666666;font-weight:500;text-transform:uppercase;letter-spacing:0.06em;margin:0 0 10px;">Message</p>
    <div style="background:#0A0A0A;border:1px solid #1f1f1f;border-left:3px solid #8B5CF6;border-radius:8px;padding:16px 20px;margin-bottom:24px;">
      <p style="font-size:14px;color:rgba(255,255,255,0.75);line-height:1.7;margin:0;white-space:pre-wrap;">${message}</p>
    </div>

    <!-- Reply nudge -->
    <p style="font-size:13px;color:#555555;margin:0;">
      Hit reply to respond directly to <strong style="color:#aaaaaa;">${name}</strong> — reply-to is set to their address.
    </p>
  `;

  return wrapEmail(body);
}

// ─── Template: Auto-reply confirmation (sent to the submitter) ────────────────

export function quoteConfirmationEmail(data: {
  name: string;
  service: string;
}): string {
  const { name, service } = data;

  const body = `
    <!-- Greeting -->
    <h2 style="font-size:22px;font-weight:700;color:#ffffff;margin:0 0 8px;letter-spacing:-0.02em;">
      Thanks, ${name}. We&rsquo;ve got your request.
    </h2>
    <p style="font-size:15px;color:rgba(255,255,255,0.5);line-height:1.7;margin:0 0 28px;">
      We&rsquo;ve received your enquiry about <strong style="color:#8B5CF6;">${service}</strong>
      and we&rsquo;ll get back to you within <strong style="color:#ffffff;">one business day</strong>
      with a clear, no-obligation quote.
    </p>

    <!-- What happens next -->
    <div style="background:#0A0A0A;border:1px solid #1f1f1f;border-radius:12px;padding:24px 28px;margin-bottom:28px;">
      <p style="font-size:12px;color:#8B5CF6;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;margin:0 0 16px;">What happens next</p>
      <table cellpadding="0" cellspacing="0">
        <tr>
          <td style="padding:6px 0;vertical-align:top;">
            <span style="display:inline-block;width:20px;height:20px;background:rgba(139,92,246,0.15);border:1px solid rgba(139,92,246,0.3);border-radius:50%;text-align:center;line-height:20px;font-size:11px;font-weight:700;color:#8B5CF6;margin-right:12px;">1</span>
          </td>
          <td style="padding:6px 0;font-size:14px;color:rgba(255,255,255,0.65);line-height:1.5;">
            We review your brief and assess the best approach for your business.
          </td>
        </tr>
        <tr>
          <td style="padding:6px 0;vertical-align:top;">
            <span style="display:inline-block;width:20px;height:20px;background:rgba(236,72,153,0.15);border:1px solid rgba(236,72,153,0.3);border-radius:50%;text-align:center;line-height:20px;font-size:11px;font-weight:700;color:#EC4899;margin-right:12px;">2</span>
          </td>
          <td style="padding:6px 0;font-size:14px;color:rgba(255,255,255,0.65);line-height:1.5;">
            We send you a clear, itemised quote — no hidden fees, no lock-in contracts.
          </td>
        </tr>
        <tr>
          <td style="padding:6px 0;vertical-align:top;">
            <span style="display:inline-block;width:20px;height:20px;background:rgba(245,158,11,0.15);border:1px solid rgba(245,158,11,0.3);border-radius:50%;text-align:center;line-height:20px;font-size:11px;font-weight:700;color:#F59E0B;margin-right:12px;">3</span>
          </td>
          <td style="padding:6px 0;font-size:14px;color:rgba(255,255,255,0.65);line-height:1.5;">
            If you&rsquo;re happy, we kick off a discovery call and get to work — fast.
          </td>
        </tr>
      </table>
    </div>

    <!-- Contact nudge -->
    <p style="font-size:14px;color:rgba(255,255,255,0.45);line-height:1.7;margin:0;">
      In the meantime, feel free to reach out at any time:
      <a href="mailto:info@synapse-ai-solutions.com" style="color:#8B5CF6;text-decoration:none;">info@synapse-ai-solutions.com</a>
    </p>
  `;

  return wrapEmail(body);
}
