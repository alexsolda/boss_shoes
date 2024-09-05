import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '800']
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
      <body className={`${inter.variable} relative z-50 h-full text-white font-normal font-inter bg-primary`}>
        <div className="absolute overflow-hidden z-0 h-[200vh] w-[200vh] border-[150px] border-white/10 rounded-full top-[-10%] right-[60%]" />
        <div className="absolute overflow-hidden z-0 h-[200vh] w-[200vh] border-[150px] border-white/10 rounded-full top-[90vh] left-[40%]" />
        <div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
