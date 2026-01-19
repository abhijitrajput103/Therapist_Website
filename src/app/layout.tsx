import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import './styles/globals.css';
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Serena Blake, PsyD - Clinical Psychologist | Los Angeles",
  description: "Dr. Serena Blake is a licensed clinical psychologist (PsyD) in Los Angeles, CA, specializing in anxiety, relationship counseling, and trauma recovery. 8 years of experience, 500+ sessions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster position="top-center" />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
