import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, Playfair_Display, Alex_Brush } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const scriptFont = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Imthias Ahmed — AI/ML Engineer & Developer Portfolio",
  description: "Editorial Magazine Style Portfolio of Imthias Ahmed, AI/ML Engineer and Developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} ${playfair.variable} ${scriptFont.variable} scroll-smooth`}
    >
      <body className="bg-[#0c0709] text-[#e8ded6] selection:bg-[#a62b4c] selection:text-white antialiased font-sans overflow-x-hidden min-h-screen">
        {children}
      </body>
    </html>
  );
}
