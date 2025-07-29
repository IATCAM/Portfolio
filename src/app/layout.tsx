import Layout from "@/components/layout/Layout";
import "./globals.css";

import { IBM_Plex_Mono , Ubuntu } from "next/font/google";
import { Metadata } from "next";

const IBMPlexMono = IBM_Plex_Mono({
  variable: "--font-IBMPlexMono",
  weight: "400",
  subsets: ["latin"],
});

const ubuntuSans = Ubuntu({
  variable: "--font-ubuntu-sans",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Sajjad Askari Front-End Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntuSans.className} ${IBMPlexMono.className}`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
