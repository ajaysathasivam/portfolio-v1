import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ajaysathasivam.dev"),
  title: "Ajay Sathasivam — Frontend Developer",
  description:
    "Frontend-specialized developer with 1.7+ years building production SaaS apps. Specializes in React 19, Next.js, TypeScript, and full-stack Node.js systems.",
  openGraph: {
    title: "Ajay Sathasivam — Frontend Developer",
    description:
      "Frontend-specialized developer with 1.7+ years building production SaaS apps. Specializes in React 19, Next.js, TypeScript, and full-stack Node.js systems.",
    url: "https://ajaysathasivam.dev",
    siteName: "Ajay Sathasivam Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajay Sathasivam — Frontend Developer",
    description:
      "Frontend-specialized developer building production SaaS with React 19, Next.js & TypeScript.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg-primary text-text-primary">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
