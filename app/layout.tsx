import "./globals.css";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { cn } from "@/lib/utils";

import { ToasterProvider } from "@/components/toaster-provider";

import NextTopLoader from "nextjs-toploader";

import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Ranking Brokers",
  description: "Professional broker reviews and financial insights",
  icons: {
    icon: "/logos/ranking-brokers-logo.png",
    shortcut: "/logos/ranking-brokers-logo.png",
    apple: "/logos/ranking-brokers-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          spaceGrotesk.variable
        )}
      >
        <GoogleAnalytics gaId="G-DYY23NK5V1" />
        <ToasterProvider />
        <NextTopLoader color="#3c3c77" showSpinner={false} />
        {children}
      </body>
    </html>
  );
}
