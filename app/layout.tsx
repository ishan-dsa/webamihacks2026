import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AMIHACKS 2026 — Let The Code Begin",
  description:
    "A flagship 24-hour innovation and coding hackathon by Amity School of Engineering & Technology, Amity University Rajasthan. ₹70,000+ Prize Pool.",
  openGraph: {
    title: "AMIHACKS 2026 — Let The Code Begin",
    description:
      "A flagship 24-hour hackathon. 24th–25th September 2026. ₹70,000+ Prize Pool.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
