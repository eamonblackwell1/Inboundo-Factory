import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Seikoro Ryokan | 清香楼 | The Kyoto Sanctuary",
  description: "Experience the timeless luxury of Seikoro Ryokan. Established 1831 on the banks of the Kamo River in Kyoto, Japan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${notoSerifJP.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
