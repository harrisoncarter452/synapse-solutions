import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Synapse Solutions — Human-Centred AI for Real Business",
  description:
    "AI chatbots, lead generation, custom AI agents, app design and web design. We connect your business to the intelligence it needs to grow.",
  keywords: "AI agency, AI chatbots, AI automation, lead generation, custom AI agents, app design, web design",
  openGraph: {
    title: "Synapse Solutions",
    description: "Human-Centred AI for Real Business",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.className}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
