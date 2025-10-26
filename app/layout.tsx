import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: 'Ali Ashraf Abir - Portfolio',
  description: 'Full Stack Web Developer',
  // icons: {
  //   icon: '/favicon.svg',
  //   shortcut: '/favicon.svg',
  //   apple: '/favicon.svg',
  // },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
