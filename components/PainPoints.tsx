"use client";

import PainPointsGrid from "@/components/PainPointsGrid";

export default function PainPoints() {
  return (
    <section
      id="painpoints"
      style={{
        padding: "28px 0 48px",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <PainPointsGrid />
      </div>
    </section>
  );
}
