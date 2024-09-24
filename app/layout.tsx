import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import React from "react";
import { Toaster } from "react-hot-toast";
import ThemeSwitch from "@/components/theme-switch";
import Footer from "@/components/footer";
import ThemeContextProvider from "@/context/theme-context";
import Script from "next/script";

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
  title: "Zamil | Personal Portfolio",
  description: "Zamil is a Software Developer and a Data Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative bg-gray-50 pt-28 text-gray-950 antialiased dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 sm:pt-36`}
      >
        <Script
          strategy="beforeInteractive"
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECPATCHA_SITE_KEY}`}
        />
        {/* <div className="absolute right-[5vw] top-[5vw] -z-10 h-[40vw] max-h-[31.25rem] w-[40vw] max-w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[5rem] dark:bg-[#946263] sm:h-[50vw] sm:w-[50vw] sm:blur-[10rem] md:right-[5vw] lg:right-[10vw] xl:right-[15vw] 2xl:right-[20vw]"></div> */}
        {/* <div className="absolute left-[-20vw] top-[5vw] -z-10 h-[40vw] max-h-[31.25rem] w-[40vw] max-w-[50rem] rounded-full bg-[#dbd7fb] blur-[5rem] dark:bg-[#676394] sm:h-[50vw] sm:w-[50vw] sm:blur-[10rem] md:left-[-15vw] lg:left-[-10vw] xl:left-[-5vw] 2xl:left-0"></div> */}
        <div className="absolute left-1/2 top-[5vw] -z-10 h-[40vw] max-h-[31.25rem] w-[40vw] max-w-[50rem] translate-x-0 transform rounded-full bg-[#fbe2e3] blur-[5rem] dark:bg-[#946263] sm:h-[45vw] sm:w-[45vw] sm:blur-[7rem] md:blur-[9rem] lg:blur-[10rem]"></div>
        <div className="absolute left-1/2 top-[5vw] -z-10 h-[40vw] max-h-[31.25rem] w-[40vw] max-w-[50rem] translate-x-[-100%] transform rounded-full bg-[#dbd7fb] blur-[5rem] dark:bg-[#676394] sm:h-[45vw] sm:w-[45vw] sm:blur-[7rem] md:blur-[9rem] lg:blur-[10rem]"></div>
        {/* <div className="absolute left-1/2 top-[5vw] -z-10 h-[40vw] max-h-[31.25rem] w-[40vw] max-w-[50rem] translate-x-[-100%] transform rounded-full bg-[#dbd7fb] dark:bg-[#676394] sm:h-[45vw] sm:w-[45vw] md:left-[-15vw] lg:left-[-10vw] xl:left-[-5vw] 2xl:left-0"></div> */}

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
