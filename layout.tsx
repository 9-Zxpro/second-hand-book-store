import type { Metadata } from "next";
import { Playfair_Display, Lora, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PageTurner — Pre-Loved Books for Eco-Conscious Readers",
  description:
    "Discover thousands of pre-loved books at up to 75% off. Sustainable reading starts here. Buy, sell, and swap second-hand books with free shipping.",
  keywords: ["second hand books", "used books", "buy books online", "sell books", "sustainable reading"],
  openGraph: {
    title: "PageTurner — Pre-Loved Books",
    description: "Give books a second life. Shop thousands of curated second-hand books.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${lora.variable} ${dmSans.variable} font-sans antialiased bg-stone-50 text-stone-900`}
      >
        {children}
      </body>
    </html>
  );
}
