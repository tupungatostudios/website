import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tupungato Studios | We Build Apps People Love",
  description:
    "Tupungato Studios creates beautiful, intuitive apps that make a difference. Discover our work and what drives us.",
  keywords: ["apps", "mobile apps", "software", "studio", "development"],
  openGraph: {
    title: "Tupungato Studios",
    description: "We Build Apps People Love",
    url: "https://tupungatostudios.com",
    siteName: "Tupungato Studios",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tupungato Studios",
    description: "We Build Apps People Love",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
