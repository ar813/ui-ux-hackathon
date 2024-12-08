import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import TopLayer from "@/app/component/TopLayer/TopLayer";
import Nav from "./component/Nav/Nav";
import Footer from "./component/Footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
        <TopLayer />
        <Nav />
        {children}
        <Footer />

      </body>
    </html>
  );
}
