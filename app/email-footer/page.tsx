import { quoteNotificationEmail, quoteConfirmationEmail } from "@/lib/email-templates";

// Replace production URL with local for preview
function localise(html: string) {
  return html.replace("https://synapse-ai-solutions.com/email-logo.png", "/email-logo.png");
}

const SAMPLE_DATA = {
  name: "James Wilson",
  email: "james@example.com",
  company: "Wilson & Co.",
  service: "AI Chatbots (Internal & External)",
  budget: "$5,000 – $15,000",
  message: "We're looking to build a customer-facing chatbot for our website and an internal knowledge base assistant for our team of 30.",
};

export default function EmailPreviewPage() {
  const notificationHtml = localise(quoteNotificationEmail(SAMPLE_DATA));
  const confirmationHtml = localise(quoteConfirmationEmail({ name: SAMPLE_DATA.name, service: SAMPLE_DATA.service }));

  return (
    <div style={{ background: "#1a1a1a", minHeight: "100vh", padding: "40px 20px", fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>

        <h1 style={{ color: "white", fontSize: "20px", fontWeight: 700, marginBottom: "8px" }}>
          Email Template Preview
        </h1>
        <p style={{ color: "#666", fontSize: "14px", marginBottom: "48px" }}>
          These are sent automatically when someone submits the quote form.
        </p>

        {/* Notification email */}
        <p style={{ color: "#8B5CF6", fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", marginBottom: "12px" }}>
          EMAIL 1 — INTERNAL NOTIFICATION (sent to info@synapse-ai-solutions.com)
        </p>
        <div
          style={{ borderRadius: "12px", overflow: "hidden", marginBottom: "48px", border: "1px solid #2a2a2a" }}
          dangerouslySetInnerHTML={{ __html: notificationHtml }}
        />

        {/* Confirmation email */}
        <p style={{ color: "#EC4899", fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", marginBottom: "12px" }}>
          EMAIL 2 — AUTO-REPLY CONFIRMATION (sent to the person who submitted the form)
        </p>
        <div
          style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid #2a2a2a" }}
          dangerouslySetInnerHTML={{ __html: confirmationHtml }}
        />
      </div>
    </div>
  );
}
