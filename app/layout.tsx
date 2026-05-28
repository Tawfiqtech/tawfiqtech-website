import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TawfiqTech — Websites & AI Automations for Local Businesses",
  description:
    "Professional websites and AI automations for local service businesses in Metro Vancouver. AI receptionists, chatbots, booking automation, and more.",
  keywords: [
    "web design Vancouver",
    "AI automation",
    "local business website",
    "AI receptionist",
    "booking automation",
    "Metro Vancouver",
  ],
  openGraph: {
    title: "TawfiqTech — Websites & AI Automations",
    description:
      "Websites and AI automations for local service businesses in Metro Vancouver.",
    url: "https://tawfiqtech.ca",
    siteName: "TawfiqTech",
    locale: "en_CA",
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
