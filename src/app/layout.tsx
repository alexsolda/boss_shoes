import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['100', '200', '400', '800']
})

export const metadata: Metadata = {
  title: "Boss Shoes",
  description: "Lorem ipsum lorem ipsum lorem ipsum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`${inter.variable} text-white font-normal font-inter bg-primary`}>{children}</body>
    </html>
  );
}
