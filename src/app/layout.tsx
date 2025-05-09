import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import { generateOpenGraph } from "@/components/OpenGraph";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Golden Gate Software Solutions",
  description: "Professional web development and software solutions",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: generateOpenGraph({}),
  twitter: {
    card: 'summary_large_image',
    title: 'Golden Gate Software Solutions',
    description: 'Professional web development and software solutions based in San Francisco',
    images: ['https://goldengatesoftwaresolutions.com/ggss_hero.webp'],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
