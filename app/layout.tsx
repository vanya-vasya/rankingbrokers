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
  title: "Yum-mi",
  description: "AI-powered creative tools for everyone",
  icons: {
    icon: "/logos/yum-mi-onigiri-logo.png",
    shortcut: "/logos/yum-mi-onigiri-logo.png",
    apple: "/logos/yum-mi-onigiri-logo.png",
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
