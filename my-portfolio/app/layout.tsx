import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
  

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oluwatobi Tella-Ndanusa",
  description: "Dive Into My Tech World ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
