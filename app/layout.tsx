import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Roboto_Condensed,
  Roboto_Mono,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto_c",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto_m",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nicolay B. - Student/Dev",
  description: "Welcome to my page!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${robotoCondensed.variable} ${robotoMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
