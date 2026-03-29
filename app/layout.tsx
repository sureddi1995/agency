import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: {
    default: "NexaAI — AI-Powered Digital Agency",
    template: "%s | NexaAI",
  },
  description:
    "Build Smart. Scale Fast. Grow with AI. NexaAI is a premium digital agency specializing in AI solutions, web & mobile development, UI/UX design, and digital marketing.",
  keywords: [
    "AI agency",
    "digital agency",
    "web development",
    "mobile development",
    "AI automation",
    "UI/UX design",
    "digital marketing",
  ],
  authors: [{ name: "NexaAI" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexaai.com",
    siteName: "NexaAI",
    title: "NexaAI — AI-Powered Digital Agency",
    description:
      "Build Smart. Scale Fast. Grow with AI.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexaAI — AI-Powered Digital Agency",
    description: "Build Smart. Scale Fast. Grow with AI.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
