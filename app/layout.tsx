import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "|AMIHACKS 2026|",

  description:
    "AMIHACKS 2026 is a 24-hour national-level hackathon organized by Amity School of Engineering & Technology, Amity University Rajasthan. ₹70,000+ Prize Pool.",

  keywords: [
    "AMIHACKS",
    "amihacks",
    "Hackathon",
    "Hackathon India",
    "Amity University Rajasthan",
    "Jaipur Hackathon",
    "Coding Competition",
    "National Level Hackathon",
    "AMIHACKS 2026",
  ],

  authors: [
    {
      name: "AMIHACKS Organizing Committee",
    },
  ],

  creator: "AMIHACKS",
  publisher: "Amity University Rajasthan",

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  openGraph: {
    title: "AMIHACKS 2026",
    description:
      "National Level 24-Hour Hackathon | ₹70,000+ Prize Pool",
    type: "website",
    images: ["/icon.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "AMIHACKS 2026",
    description:
      "National Level 24-Hour Hackathon | ₹70,000+ Prize Pool",
    images: ["/icon.png"],
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
