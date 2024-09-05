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
      <body className={`${inter.variable} h-full text-white font-normal font-inter bg-primary`}>
      <div className="absolute h-[130vh] w-[130vh] border-[150px] border-white/10 rounded-full top-[-10%] right-[60%]" />
      <div className="absolute h-[150vh] w-[150vh] border-[150px] border-white/10 rounded-full top-[90vh] left-[40%]" />
      <div className="absolute top-[100vh] left-0 transform translate-y-full w-0 h-0 border-l-[100vh] border-l-blue-300 border-r-[100vh] border-r-transparent border-t-[100vh] border-t-transparent" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
