import "./globals.css";
import type { Metadata } from "next";
import { Fira_Code, Inter } from "next/font/google";
import { TRPCProvider } from "@/trpc/client";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Contex",
  description:
    "Contex: A semantic search engine for engineers, delivering context-aware, intent-driven results to accelerate problem-solving and knowledge discovery.",
  keywords: [
    "semantic search",
    "engineer search engine",
    "developer tools",
    "bug fixing",
    "code search",
    "context-aware search",
    "knowledge discovery",
    "technical search",
    "programming help",
    "error resolution",
    "GitHub search",
    "Stack Overflow search",
    "internal documentation search",
    "open-source search",
    "developer productivity",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${firaCode.variable} antialiased`}>
        <TRPCProvider>{children}</TRPCProvider>
      </body>
    </html>
  );
}
