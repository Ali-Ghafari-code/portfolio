import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import { ThemeProvider } from "next-themes";
import Footer from "./components/footer/Footer";
import { Nerko_One } from "next/font/google";

const nerkoOne = Nerko_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-nerko-one",
});

export const metadata: Metadata = {
  title: {
    default: "Ali Ghafari",
    template: "Ali Ghafari | %s",
  },
  description: "Ali Ghafari - Junior Frontend Developer specialized in Next.js and React.",
  keywords: "Ali Ghafari, Frontend Developer, Next.js, React, JavaScript, Web Development, Portfolio",
  robots: "index, follow",
  other: {"google-site-verification":"wPO7R2T0SVBThAm3Xk5or9Qa1AHOZfCU8ORlVurHhes"},
  openGraph: {
    title: "Ali Ghafari | Frontend Developer",
    description: "Ali Ghafari - Junior Frontend Developer specialized in Next.js and React.",
    url: "https://alighafari.com",
    siteName: "Ali Ghafari Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${nerkoOne.variable} antialiased`}>
        <ThemeProvider attribute="data-theme" defaultTheme="dark">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
